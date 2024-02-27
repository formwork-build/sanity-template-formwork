/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'
import imageUrlBuilder from '@sanity/image-url'
import { previewClient } from '../../lib/sanity.server'
import resolveLink from '../../utils/resolveLink'
import formatPageTitle from '../../utils/formatPageTitle'
import { siteUrl } from '../../utils/constants'

const builder = imageUrlBuilder(previewClient)

const SocialPreview = ({ document }) => {
	const doc = document.displayed
	const [siteSettings, setSiteSettings] = useState(null)

	const formattedTitle = formatPageTitle(doc.title, doc.seo?.metaTitle, siteSettings?.siteTitle)

	useEffect(() => {
		previewClient.fetch('*[_type == "siteSettings"][0]').then(settings => {
			setSiteSettings(settings)
		})
	}, [])

	const imgSrc = !siteSettings ? null : builder.image(doc.seo?.socialImage ?? siteSettings?.socialImage).width(1200).height(630).url()

	if(!siteSettings) return <p style={{marginLeft: '1em'}}>Loading...</p>
	return(
		<a href={siteUrl + resolveLink(doc)} target="_blank" style={{
			borderRadius: '8px',
			border: '1px solid #CDCDCD',
			margin: '40px auto 0',
			maxWidth: '500px',
			overflow: 'hidden',
			display: 'block',
			textDecoration: 'none',
			color: 'black',
		}} rel="noreferrer">
			{imgSrc && 
				<img 
					src={imgSrc}
					style={{
						width: '100%',
						borderBottom: '1px solid #CDCDCD',
					}}
				/>
			}
			<div style={{
				padding: '10px'
			}}>
				<p style={{fontWeight: 'bold', marginTop: 0, marginBottom: '10px'}}>{formattedTitle}</p>
				{doc.seo?.metaDescription ?
					<p style={{marginTop: '10px'}}>{doc.seo?.metaDescription}</p> :
					<p style={{marginTop: '10px'}}>{siteSettings.metaDescription}</p>
				}
				<h5 style={{fontWeight: 400, marginBottom: 0}}>{siteUrl + resolveLink(doc)}</h5>
			</div>
		</a>
	)
}

export default SocialPreview