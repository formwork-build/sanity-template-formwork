import PropTypes from 'prop-types'
import DataViewer from '@utils/DataViewer'
import Seo from '@components/Seo'
import SpinningNut from '@components/SpinningNut'
import RichText from '@components/RichText'

const Template = ({ data }) => {
	const page = data?.page
	return (
		<>
			<Seo
				title={page?.title}
				metaTitle={page?.seo?.metaTitle}
				description={page?.seo?.metaDescription}
				image={page?.seo?.socialImage}
			/>

			<SpinningNut />
			<DataViewer data={data} name='data' />
		</>
	)
}

Template.propTypes = {
	data: PropTypes.object,
}

export default Template