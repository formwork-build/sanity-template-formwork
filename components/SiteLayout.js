import PropTypes from 'prop-types'
import Header from '@components/Header'
import Footer from '@components/Footer'
import { useSiteState } from '@context/siteContext'
import Alert from './alert'
import Script from 'next/script'
import { gTag } from '@utils/constants'

const SiteLayout = ({ children, className }) => {

	const [siteState] = useSiteState()

	// // You can use the below function to close the menu whenenver the location changes
	// useEffect(() => {
		
	// 	// eslint-disable-next-line
	// }, [location])

	return (
		<div className={className}>
			{siteState?.preview && <Alert />}
			<Header />
			{gTag &&
			<>
				<Script
					src={`https://www.googletagmanager.com/gtag/js?id=${gTag}`}
					strategy="afterInteractive"
				/>
				<Script id="google-analytics" strategy="afterInteractive">
					{`
					window.dataLayer = window.dataLayer || [];
					function gtag(){window.dataLayer.push(arguments);}
					gtag('js', new Date());

					gtag('config', '${gTag}');
				`}
				</Script>
			</>
			}
			<main>
				<div className='min-h-screen flex flex-col'>
					{children}
					<Footer />
				</div>
			</main>
		</div>
	)
}

SiteLayout.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
}

export default SiteLayout