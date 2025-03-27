import { useMemo } from 'react'
import { LiveQueryProvider } from 'next-sanity/preview'
import { getClient } from '@lib/sanity.server'
import PropTypes from 'prop-types'

const PreviewProvider = ({ children }) => {
	const token = process.env.NEXT_PUBLIC_SANITY_API_READ_TOKEN
	const client = useMemo(() => getClient({ token }), [token])

	console.log('PreviewProvider mounted, has token:', !!token)

	return <LiveQueryProvider client={client}>{children}</LiveQueryProvider>
}

export default PreviewProvider