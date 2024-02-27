import PropTypes from 'prop-types'

const Footer = () => {
	return(
		<div className='p-5 flex justify-between mt-auto'>
			<button 
				onClick={() => window.scrollTo({
					top: 0,
					left: 0,
					behavior: 'smooth'
				})}>
				Back to top
			</button>
			<p>:P</p>
		</div>
	)
}

Footer.propTypes = {
	className: PropTypes.string,
}

export default Footer
