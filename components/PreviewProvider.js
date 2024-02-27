import { useMemo } from 'react'
import { LiveQueryProvider } from 'next-sanity/preview'
import { getClient } from '@lib/sanity.server'
import PropTypes from 'prop-types'
const token = process.env.SANITY_API_READ_TOKEN || process.env.SANITY_API_WRITE_TOKEN

export default function PreviewProvider({ children }) {
	const client = useMemo(() => getClient({token}), [token])
	return <LiveQueryProvider client={client}>{children}</LiveQueryProvider>
}

PreviewProvider.propTypes = {
	children: PropTypes.node
}