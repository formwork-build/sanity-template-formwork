/** @type {import('next').NextConfig} */

const generateRedirects = require('./lib/fetchRedirects')

const withBundleAnalyzer = require('@next/bundle-analyzer')({
	enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer({
	async redirects() {
		return generateRedirects()
	},
	images: {
		remotePatterns: [
			{ hostname: 'cdn.sanity.io' },
		],
	},
	eslint: {
		ignoreDuringBuilds: true,
	},
})

//To analyze bundle run ANALYZE=true yarn build
