const resolveLink = doc => {
	if(!doc) return ''
	const type = doc._type
	const slug = doc.slug?.current

	const urls = {
		page: `/${slug}`,
		homePage: '/',
		// add other types here
	}

	return urls[type] ?? `/${slug}`
	// defaults to the slug

}

export default resolveLink
