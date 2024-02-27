import { pageQuery, getPaths } from '@lib/queries'
import { getClient } from '@lib/sanity.server'
import PropTypes from 'prop-types'
import Template from 'templates/Page'
import PagePreview from '@components/PagePreview'
import dynamic from 'next/dynamic'
const PreviewProvider = dynamic(() => import('../components/PreviewProvider'), {
	ssr: false,
})

const Page = ({ preview, data }) => {
	return (
		!preview ? <Template data={data}/> :
			<PreviewProvider>
				<PagePreview
					renderTemplate={liveData => <Template data={liveData} />}
					initialData={data} 
					query={pageQuery} 
					slug={data?.page?.slug} 
				/>
			</PreviewProvider>
	)
}

export const getStaticProps = async ({ preview = false, params }) => {
	const client = getClient(preview)
	const data = await client.fetch(pageQuery, {slug: params.slug})
	return {props: {preview, data}}
}

export async function getStaticPaths() {
	const paths = await getClient().fetch(getPaths('page'))
	return {
		paths: paths.map(slug => ({ params: { slug } })),
		fallback: false,
	}
}

Page.propTypes = {
	data: PropTypes.object,
	preview: PropTypes.bool,
}

export default Page