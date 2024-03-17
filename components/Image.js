import PropTypes from 'prop-types'
import NextImage from 'next/image'
import imageUrlBuilder from '@sanity/image-url'
import { sanityConfig } from '@lib/config'
import transformSizes from '@utils/transformSizes'
import { useState } from 'react'

const Image = ({ asset, sizes, quality = 50, aspectRatio, cover, contain, priority, bg }) => {

	const [loaded, setLoaded] = useState(false)

	if(!asset) return null

	const a = asset?.asset
	const width = a?.w
	const height = aspectRatio ? Math.round(a?.w * aspectRatio) : a?.h
	const builder = imageUrlBuilder(sanityConfig)
	const urlFor = (source) => builder.image(source).width(width).height(height)
	const backgroundColor = bg ?? a?.c
	const src = urlFor(a?._id)?.toString()

	return (
		<div style={{backgroundColor}} className='w-full h-full'>
			<div className={`transition duration-[0.4s] ${loaded ? 'opacity-100' : 'opacity-0'} w-full h-full`}>
				<NextImage
					sizes={transformSizes(sizes)}
					width={width}
					height={height}
					quality={quality}
					src={src}
					priority={priority}
					alt={asset?.alt ?? ''}
					onLoadingComplete={() => setLoaded(true)}
					className={cover ? 'object-cover w-full h-full' : contain ? 'w-full h-full object-contain' : 'w-full'}
				/>
			</div>
		</div>
	)
}

Image.propTypes = {
	asset: PropTypes.object,
	sizes: PropTypes.string.isRequired,
	quality: PropTypes.number,
	aspectRatio: PropTypes.number,
	cover: PropTypes.bool,
	priority: PropTypes.bool,
	bg: PropTypes.string,
	contain: PropTypes.bool,
}

export default Image