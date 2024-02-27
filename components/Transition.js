import PropTypes from 'prop-types'
import { AnimatePresence, m } from 'framer-motion'
import { useRouter } from 'next/router'


const Transition = ({ children }) => {
	const router = useRouter()
	return (
		<AnimatePresence exitBeforeEnter>
			<div key={router?.route}>
				<m.div 
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0 }}
				>
					{children}
				</m.div>
			</div>
		</AnimatePresence>
	)
}

Transition.propTypes = {
	children: PropTypes.node,
}

export default Transition
