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
