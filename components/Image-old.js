import { useState } from 'react'
import PropTypes from 'prop-types'
import calculateStyles from '@sanity/imagetool/calculateStyles'
import { sanityClient } from '@lib/sanity.server'
import { useNextSanityImage } from 'next-sanity-image'
import Img from 'next/image'


const Image = ({ image, maxWidth, aspectRatio, className, cover }) => {
	// Note: cover and hotspot are not currently compatible
	// maxWidth not currently in use
	let id = image?.asset?._id || image?.asset?._ref
	
	const [loaded, setLoaded] = useState(false)

	let imageProps = useNextSanityImage(
		sanityClient,
		image
	)

	if( !id || !image ) return null

	let styles = calculateStyles({
		hotspot: image?.hotspot,
		crop: image?.crop,
		image: {
			height: aspectRatio ? imageProps?.height : imageProps?.height, 
			width: aspectRatio ? imageProps?.height * aspectRatio : imageProps?.width,
		},
		container: {aspectRatio: aspectRatio ?? null},
	})

	return (
		<div className={className}>
			<div style={{...styles?.container, height: cover ? '100%' : 'auto'}}>
				<div style={styles?.padding} />
				<div style={styles?.crop}>
					<Img 
						{...imageProps} 
						onLoadingComplete={() => setLoaded(true)} 
						sizes="100vw"
						alt={image?.alt ?? ''}
						style={{
							opacity: loaded ? 1 : 0,
							transition: 'opacity 0.35s',
							objectFit: cover || aspectRatio ? 'cover' : 'contain',
							width: '100%',
							height: cover || aspectRatio ? '100%' : 'auto',
						}}
					/>
				</div>
			</div>
		</div>
	)
}

Image.propTypes = {
	image: PropTypes.object,
	aspectRatio: PropTypes.number,
	maxWidth: PropTypes.number,
	className: PropTypes.string,
	cover: PropTypes.bool,
}

export default Image
