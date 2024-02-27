import 'styles/global.css'
import '../public/fonts/fonts.css'
import SiteLayout from '@components/SiteLayout'
import { SiteStore } from '@context/siteContext'
// import { NextAdapter } from 'next-query-params'
// import { QueryParamProvider } from 'use-query-params'
import PropTypes from 'prop-types'
import { LazyMotion } from 'framer-motion'

const loadFeatures = () =>
	import('../utils/framerFeatures.js').then(res => res.default)


// Uncomment QueryParams lines if you need query params

// const goodSans = localFont({
// 	src: [
// 		{
// 			path: '../public/fonts/GoodSans-Regular.woff2',
// 			weight: '400',
// 			style: 'normal',
// 			// variable: '--font-good-sans'
// 		},
// 	],
// })

const MyApp = ({ Component, pageProps }) => {
	if(Component.name === 'StudioPage') return <Component {...pageProps} />
	return (
		<>
			{/* <QueryParamProvider adapter={NextAdapter}> */}
			<SiteStore 
				globalData={pageProps?.data?.global} 
				preview={pageProps?.preview}
			>
				<LazyMotion features={loadFeatures}>
					<SiteLayout>
						<Component {...pageProps} />
					</SiteLayout>
				</LazyMotion>
			</SiteStore>
			{/* </QueryParamProvider> */}
		</>
	)
}

MyApp.propTypes = {
	Component: PropTypes.func,
	pageProps: PropTypes.object,
}

export default MyApp

