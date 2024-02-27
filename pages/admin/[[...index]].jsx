// import Head from 'next/head'
// import { NextStudio } from 'next-sanity/studio'
// import { metadata } from 'next-sanity/studio/metadata'
// import config from '../../sanity.config'

// Note to self: for some reason, this setup creates a larger framework file size in the Next bundle. It seems that it's triggering next to get a more bloated version of react / react-dom?
// I've tried to fix it a few ways, but can't manage to get the bundle size down.

// To cut down on  file size you can remove this route and set the studio up in the conventional way.

// This file also should be called, [[...index]] to allow for the studio to be accessed at /admin and /admin/anything/else, however, this means that the footer appears on the studio. So I've left it as /admin/index for now.
// If this has unintended side-effects we may need to change it back.

// const StudioPage = () => {
// 	return (
// 		<>
// 			<Head>
// 				{Object.entries(metadata).map(([key, value]) => (
// 					<meta key={key} name={key} content={value} />
// 				))}
// 				<link rel="icon" type="image/png" href="/images/favicon.png" />
// 			</Head>
// 			<NextStudio config={config} />
// 		</>
// 	)
// }

const StudioPage = () => null

export default StudioPage

