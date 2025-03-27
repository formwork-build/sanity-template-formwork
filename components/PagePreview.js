import { useEffect, useState } from 'react'
import { useLiveQuery } from 'next-sanity/preview'
import PropTypes from 'prop-types'

const PagePreview = ({ initialData, query, slug, renderTemplate }) => {
	const params = slug ? { slug } : undefined
	const [data, loading] = useLiveQuery(
		initialData,
		query,
		params
	)

	// If we're loading but have initial data, show that
	if (loading && initialData) {
		return renderTemplate(initialData)
	}

	// If we have live data, show that
	if (data) {
		return renderTemplate(data)
	}

	// If we have initial data but no live data yet, show initial
	if (initialData) {
		return renderTemplate(initialData)
	}

	// Only show loading if we have nothing else to show
	return (
		<div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-50">
			<p className="text-lg">Loading preview...</p>
		</div>
	)
}

PagePreview.propTypes = {
	initialData: PropTypes.object.isRequired,
	query: PropTypes.string.isRequired,
	slug: PropTypes.string,
	renderTemplate: PropTypes.func.isRequired
}

export default PagePreview