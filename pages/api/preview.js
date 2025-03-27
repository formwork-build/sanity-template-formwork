import { documentBySlugQuery } from '../../lib/queries'
import { getClient } from '../../lib/sanity.server'
import resolveLink from '../../utils/resolveLink'

function redirectToPreview(res, Location) {
	// Enable Draft Mode by setting the cookies
	res.setDraftMode({ enable: true })
	// Redirect to a preview capable route
	res.redirect(307, Location)
}

export default async function preview(req, res) {
	// If no slug is provided open preview mode on the frontpage
	if (!req.query.slug) {
		return redirectToPreview(res, '/')
	}

	// Check if the post with the given `slug` exists
	const doc = await getClient(true).fetch(documentBySlugQuery, {
		slug: req.query.slug,
		_type: req.query._type,
	})

	// If the slug doesn't exist prevent preview mode from being enabled
	if (!doc) {
		return res.status(401).json({ message: 'Invalid slug' })
	}

	// Redirect to the path from the fetched post
	redirectToPreview(res, resolveLink(doc))
}