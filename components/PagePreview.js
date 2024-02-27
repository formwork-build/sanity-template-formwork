import { useEffect, useState } from 'react'
import { useLiveQuery } from 'next-sanity/preview'
import PropTypes from 'prop-types'

const PagePreview = ({ initialData, query, slug, renderTemplate }) => {
	const [data, loading] = useLiveQuery(initialData, query, slug ? { slug } : null)
	const [loaded, setLoaded] = useState(false)
	const [init, setInit] = useState(false)
	useEffect(() => {
		setInit(true)
		if(init && !loading){
			setLoaded(true)
		}
	}, [loading])
	return loaded ? renderTemplate(data) : <p className="md fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">Loading preview...</p>
}

PagePreview.propTypes = {
	initialData: PropTypes.object,
	query: PropTypes.string,
	slug: PropTypes.string,
	renderTemplate: PropTypes.func,
}

export default PagePreview



