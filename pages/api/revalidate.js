import { isValidSignature, SIGNATURE_HEADER_NAME } from '@sanity/webhook'
import { client } from '../../lib/sanity.server'
import resolveLink from '../../utils/resolveLink'

// Next.js will by default parse the body, which can lead to invalid signatures
export const config = {
	api: {
		bodyParser: false,
	},
}

const log = (msg, error) =>
	console[error ? 'error' : 'log'](`[revalidate] ${msg}`)

async function readBody(readable) {
	const chunks = []
	for await (const chunk of readable) {
		chunks.push(typeof chunk === 'string' ? Buffer.from(chunk) : chunk)
	}
	return Buffer.concat(chunks).toString('utf8')
}

export default async function revalidate(req, res) {
	const signature = req.headers[SIGNATURE_HEADER_NAME]
	const body = await readBody(req) // Read the body into a string
	if (
		!isValidSignature(
			body,
			signature,
			process.env.SANITY_REVALIDATE_SECRET?.trim()
		)
	) {
		const invalidSignature = 'Invalid signature'
		log(invalidSignature, true)
		res.status(401).json({ success: false, message: invalidSignature })
		return
	}

	const jsonBody = JSON.parse(body)
	console.log(jsonBody)

	let documentSlug = resolveLink(jsonBody ?? '')

	const { _id: id, _type } = jsonBody
	if (typeof id !== 'string' || !id) {
		const invalidId = 'Invalid _id'
		log(invalidId, true)
		return res.status(400).json({ message: invalidId })
	}

	const referencingDocuments = await client.fetch('*[references($id)]{ _type, slug }', { id })
	const referencingSlugs = referencingDocuments.map(doc => resolveLink(doc))

	let staleRoutes = [documentSlug, ...referencingSlugs]

	console.log({ documentSlug, referencingSlugs, id, staleRoutes })

	// revalidate all documents if there's a global settings change
	if (['siteSettings'].includes(_type)) {
		const allDocuments = await client.fetch('*[defined(slug.current)]{ _type, slug }')
		staleRoutes = allDocuments.map(doc => resolveLink(doc))
	}

	try {
		await Promise.all(staleRoutes.map((route) => res.revalidate(route)))
		const updatedRoutes = `Updated routes: ${staleRoutes.join(', ')}`
		console.log(updatedRoutes)
		return res.status(200).json({ message: updatedRoutes })
	} catch (err) {
		log(err.message, true)
		// Still returning a 200 code here, because otherise Sanity will continue trying the webhook and clog up the system, slowing the updates.
		return res.status(200).json({ message: err.message })
	}
}
