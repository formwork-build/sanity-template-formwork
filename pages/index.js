import { indexQuery } from '@lib/queries'
import { getClient } from '@lib/sanity.server'
import PropTypes from 'prop-types'
import Template from 'templates/Index'
import dynamic from 'next/dynamic'
const PreviewProvider = dynamic(() => import('../components/PreviewProvider'), {
	ssr: false,
})
import PagePreview from '@components/PagePreview'

const Page = ({ preview, data }) => {
	return (
		!preview ? <Template data={data}/> :
			<PreviewProvider>
				<PagePreview
					renderTemplate={liveData => <Template data={liveData} />}
					initialData={data} 
					query={indexQuery} 
				/>
			</PreviewProvider>
	)
}

export const getStaticProps = async ({ preview = false }) => {
	const client = getClient(preview)
	const data = await client.fetch(indexQuery)
	return {props: {preview, data}}
}

Page.propTypes = {
	data: PropTypes.object,
	preview: PropTypes.bool,
}

export default Page
