import PropTypes from 'prop-types'
import useSiteSettings from '@utils/useSiteSettings'
import formatPageTitle from '@utils/formatPageTitle'
import Head from 'next/head'

const Seo = ({ description, lang, meta, title, metaTitle, image }) => {

	const { siteTitle, metaDescription, socialImage } = useSiteSettings()

	const resolvedMetaDescription = description || metaDescription
	const metaImage = image ? image?.asset?.url : socialImage?.asset?.url
	const formattedTitle = formatPageTitle(title, metaTitle, siteTitle)

	return (
		<Head>
			<title>{formattedTitle}</title>
			<link rel="icon" type="image/png" href="/images/favicon.png" />
			<meta name="description" content={resolvedMetaDescription} />
			<meta property="og:title" content={formattedTitle} />
			<meta property="og:image" content={metaImage} key="ogImage" />
			<meta name="og:description" content={resolvedMetaDescription} />
			<meta name="og:type" content='website' />
			<meta name="twitter:card" content='summary_large_image' />
			<meta name="twitter:title" content={formattedTitle} />
			<meta name="twitter:description" content={resolvedMetaDescription} />
		</Head>
	)
}

Seo.defaultProps = {
	lang: 'en',
	meta: [],
	description: '',
}

Seo.propTypes = {
	description: PropTypes.string,
	lang: PropTypes.string,
	meta: PropTypes.arrayOf(PropTypes.object),
	title: PropTypes.string,
	image: PropTypes.object,
	metaTitle: PropTypes.string,
}

export default Seo
