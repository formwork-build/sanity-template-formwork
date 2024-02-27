import { useState, useEffect } from 'react'

const useWindow = () => {
	const [currentWindow, setCurrentWindow] = useState({})

	useEffect(() => {
		function handleResize() {
			setCurrentWindow({...window})
		}
		handleResize()
		window.addEventListener('resize', handleResize)
		window.addEventListener('scroll', handleResize)
		return () => (window.removeEventListener('resize', handleResize) && window.addEventListener('scroll', handleResize))
	}, [])

	return currentWindow
}

export default useWindow