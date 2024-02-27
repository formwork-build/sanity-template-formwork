import PropTypes from 'prop-types'
import Link from 'next/link'
import useSiteSettings from '@utils/useSiteSettings'

const Header = () => {
	const { siteTitle } = useSiteSettings()
	return(
		<div className='fixed inset-x-0 top-0 p-5 flex justify-between'>
			<p>{siteTitle}</p>
			<nav>
				<div className="inline-block ml-3">
					<Link href={'/'}>Home</Link>
				</div>
				<div className="inline-block ml-3">
					<Link href={'/example-page'}>Example Page</Link>
				</div>
			</nav>
		</div>
	)
}

Header.propTypes = {
	className: PropTypes.string,
}

export default Header
