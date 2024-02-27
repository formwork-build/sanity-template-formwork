const { createClient } = require('next-sanity')

const options = {
	dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
	projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
	useCdn: true,
	apiVersion: '2022-03-13',
}


const client = createClient(options)

module.exports = async () => {
	const query = `
    *[_type == 'redirect'] {
      destination,
      source,
      "permanent": permanent == true,
    }
  `
	const redirects = await client.fetch(query)
	return redirects
}