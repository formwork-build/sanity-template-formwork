/**
 * Server-side Sanity utilities. By having these in a separate file from the
 * utilities we use on the client side, we are able to tree-shake (remove)
 * code that is not used on the client side.
 */

import { createClient } from 'next-sanity'
import { sanityConfig } from './config'

export const client = createClient({
	...sanityConfig,
	useCdn: false,
	perspective: 'published',
	token:
    process.env.SANITY_API_READ_TOKEN || process.env.SANITY_API_WRITE_TOKEN,
})

export const getClient = preview => {
	if(preview){
		return client.withConfig({
			// ignoreBrowserTokenWarning: true,
			perspective: 'previewDrafts',
		})
	}
	return client
}