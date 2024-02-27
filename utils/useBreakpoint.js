import { useState, useEffect } from 'react'

const getBreakpoints = (width) => {
	return {
		loaded: true,
		max: width <= parseInt(1600),
		isLgDesktop: width <= parseInt(1440),
		isDesktop: width <= parseInt(1230),
		isTablet: width <= parseInt(1024),
		isMobile: width <= parseInt(768),
		isMobileFilter: width <= parseInt(1500),
	}
}

const useBreakpoint = () => {
	const [breakpoints, setBreakpoints] = useState({loaded: false})

	const calcBreakpoints = () => {
		setBreakpoints(getBreakpoints(window.innerWidth))
	}

	useEffect(() => {
		calcBreakpoints()
		window.addEventListener('resize', calcBreakpoints)
		return () => window.removeEventListener('resize', calcBreakpoints)
	}, [])

	return breakpoints
}

export default useBreakpoint
