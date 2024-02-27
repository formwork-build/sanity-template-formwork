//pages/sitemap.xml.js
import { sitemapQuery } from '@lib/queries'
import resolveLink from '@utils/resolveLink'
import { client } from '@lib/sanity.server'
import { siteUrl } from '@utils/constants'

function generateSiteMap(data) {
	return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <!--We manually set the URLs you know already-->
     <url>
       <loc>${siteUrl}/</loc>
     </url>
     ${data.pages
		.map(page => {
			return `
       <url>
           <loc>${`${siteUrl}${resolveLink(page)}`}</loc>
       </url>
     `
		})
		.join('')}
   </urlset>
 `
}

function SiteMap() {
	// getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }) {
	// We make an API call to gather the URLs for our site
	const posts = await client.fetch(sitemapQuery)

	// We generate the XML sitemap with the posts data
	const sitemap = generateSiteMap(posts)

	res.setHeader('Content-Type', 'text/xml')
	// we send the XML to the browser
	res.write(sitemap)
	res.end()

	return {
		props: {},
	}
}

export default SiteMap