const expandLink = `
	{
		...,
		document {
			"_type": @->_type,
			"slug": @->slug
		},
		file{
			...,
			asset->{
				...,
				url
			}
		}
	}
`

const expandButton = `
	{
		...,
		link${expandLink}
	}
`

const seo = `
	seo{
		...,
		socialImage{
			asset->{
				url
			}
		}
	}
`

const imageWithAlt = `{
	_type,
	asset->{
		_id,
		"c": metadata.palette.dominant.background,
		"r": metadata.dimensions.aspectRatio,
		"w": metadata.dimensions.width,
		"h": metadata.dimensions.height,
	},
	alt
}`

// const imageWithAlt = `{
// 	_type,
// 	asset->{
// 		...
// 	}
// }`

const global = `
	"global": {
		"siteSettings": *[_type == "siteSettings"] | order(_updatedAt desc) [0] {
			siteTitle,
			metaDescription,
			socialImage{
				asset->{
					url
				}
			}
		}
	}
`

const expandPortableText = `
	[]{
		...,
		markDefs[]{
			...,
			_type == "link" => {
				document {
					"_type": @->_type,
					"slug": @->slug
				},
				file{
					...,
					asset->{
						...,
						url
					}
				}
			}
		}
	}
`

export const indexQuery = `
{
	"page": *[_type == "homePage"] | order(_updatedAt desc) [0] {
		_id,
		title,
		text${expandPortableText},
		image${imageWithAlt},
		${seo},
	},
	${global}
}
`

export const pageQuery = `
{
  "page": *[_type == "page" && slug.current == $slug] | order(_updatedAt desc) [0] {
		"slug": slug.current,
		title,
		text${expandPortableText},
		${seo},
  },
	${global}
}`

export const sitemapQuery = `
{
  "pages": *[_type == "page"] | order(_updatedAt desc) {
		_type,
		slug {
			current
		}
  },
	${global}
}`

export const query404 = `
{
	${global}
}`


export const getPaths = type => `
*[_type == "${type}" && defined(slug.current)][].slug.current
`

// used in preview
export const documentBySlugQuery = `
*[_type == $_type && slug.current == $slug][0] {
	_type,
  slug,
}
`
