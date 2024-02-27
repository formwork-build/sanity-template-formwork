import { useGlobalData } from '@context/siteContext'

const useSiteSettings = () => {
	const [ globalData ] = useGlobalData()
	return globalData?.siteSettings || {}
}

export default useSiteSettings
