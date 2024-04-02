import PropTypes from 'prop-types'
import { PortableText } from '@portabletext/react'
import SanityLink from '../components/SanityLink'

const components = () => ({
	marks: {
		link: props => <SanityLink link={props?.value}>{props?.children}</SanityLink>
	},
	block: {
		normal: (props) => {
			return (
				(props.children && props.children[0] === '') ?
					<br/>
					:
					<p>{props.children}</p>
			)
		},
	},
	list: {
		bullet: props => <ul className='my-5 list-disc list-inside'>{props?.children}</ul>,
		number: props => <ol className='my-5 list-decimal list-inside'>{props?.children}</ol>,
	},
	listItem: {
		bullet: ({children}) => <li>{children}</li>,
		number: ({children}) => <li>{children}</li>,
	},
})

const RichText = ({ content }) => {
	if(!content) return null
	else {
		return <PortableText value={content}  components={components()}/>
	}
}

RichText.propTypes = {
	content: PropTypes.array,
}

export default RichText
