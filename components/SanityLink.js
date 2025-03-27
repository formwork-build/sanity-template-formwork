import PropTypes from 'prop-types'
import Link from 'next/link'
import resolveLink from '@utils/resolveLink'
import { useRouter } from 'next/router'

const SanityLink = ({ className, link, children, delay, href }) => {
	const router = useRouter()

	const handleClick = (e, url) => {
		e.preventDefault()
		setTimeout(() => {
			router.push(url)
		}, delay)
	}

	if ((link?.linkType === 'internal' && link?.document) || href) {
		const resolvedUrl = resolveLink(link?.document ?? '')
		return (
			<Link href={href ?? resolvedUrl} onClick={e => delay ? handleClick(e, href ?? resolvedUrl) : null} className={className}>
				{children}
			</Link>
		)
	} else if (link?.linkType === 'file') {
		return (
			<a href={link?.file?.asset?.url} target={'_blank'} rel='noreferrer' className={className}>
				{children}
			</a>
		)
	} else if (link?.url) {
		return (
			<a href={link?.url} target={link?.blank ? '_blank' : '_self'} rel='noreferrer' className={className}>
				{children}
			</a>
		)
	} else {
		return (
			<div className={className}>
				{children}
			</div>
		)
	}
}

SanityLink.propTypes = {
	className: PropTypes.string,
	link: PropTypes.object,
	children: PropTypes.node,
	delay: PropTypes.number,
	href: PropTypes.string
}

export default SanityLink