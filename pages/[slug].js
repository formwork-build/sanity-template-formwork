import { pageQuery, getPaths } from '@lib/queries'
import { getClient } from '@lib/sanity.server'
import PropTypes from 'prop-types'
import Template from 'templates/Page'
import PagePreview from '@components/PagePreview'
import dynamic from 'next/dynamic'
const PreviewProvider = dynamic(() => import('../components/PreviewProvider'),)

const Page = ({ preview, data }) => {
	console.log('Page props:', { preview, data, slug: data?.page?.slug })

	if (!preview) return <Template data={data} />

	return (
		<PreviewProvider>
			<PagePreview
				renderTemplate={liveData => <Template data={liveData} />}
				initialData={data}
				query={pageQuery}
				slug={data?.page?.slug} // Make sure this is being passed
			/>
		</PreviewProvider>
	)
}

export const getStaticProps = async (context) => {
	const preview = context.draftMode ?? false
	const client = getClient(preview)
	const data = await client.fetch(pageQuery, { slug: context.params.slug })
	return { props: { preview, data } }
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