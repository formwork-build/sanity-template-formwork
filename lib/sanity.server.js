/**
 * Server-side Sanity utilities. By having these in a separate file from the
 * utilities we use on the client side, we are able to tree-shake (remove)
 * code that is not used on the client side.
 */

import { createClient } from 'next-sanity'
import { sanityConfig } from './config'

export function getClient(preview = false) {
	const token = preview
		? process.env.NEXT_PUBLIC_SANITY_API_READ_TOKEN
		: undefined

	console.log('Creating Sanity client:', {
		preview,
		hasToken: !!token,
		projectId: sanityConfig.projectId,
		dataset: sanityConfig.dataset
	})

	if (preview && !token) {
		console.warn('Preview mode requested but no token available')
	}

	return createClient({
		...sanityConfig,
		useCdn: !preview,
		token,
		perspective: preview ? 'previewDrafts' : 'published'
	})
}