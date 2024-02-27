import React, { useState, useContext } from 'react'
import PropTypes from 'prop-types'

export const SiteContext = React.createContext()

export const SiteStore = ({ children, globalData, preview }) => {
	
	const initialSiteState = {
		globalData,
		preview
	}
	
	const [siteState, setSiteState] = useState(initialSiteState)
	return(
		<SiteContext.Provider value={{
			siteState: siteState,
			setSiteState: setSiteState
		}}>
			{children}
		</SiteContext.Provider>
	)
}

SiteStore.propTypes = {
	children: PropTypes.node,
}

// hook to access siteState globally
export const useSiteState = () => {
	const { siteState, setSiteState } = useContext(SiteContext)
	return [siteState, setSiteState]
}

// hook to access siteState globally
export const useGlobalData = () => {
	const { siteState, setSiteState } = useContext(SiteContext)
	const globalData = siteState.globalData
	const setGlobalData = data => {
		setSiteState(prevState => ({
			...prevState,
			globalData: data
		}))
	}
	return [globalData, setGlobalData]
}

SiteStore.propTypes = {
	children: PropTypes.node,
	globalData: PropTypes.object,
	preview: PropTypes.bool,
}