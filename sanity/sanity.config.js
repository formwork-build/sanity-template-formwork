
import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { schemaTypes } from './schemas/schema'
import { structure } from './deskStructure'
import defaultDocumentNode from './defaultDocumentNode'
import { noteField } from 'sanity-plugin-note-field'

export const projectId = 'pqrto1u3'
export const dataset = 'production'
export const vercelUrl = 'https://formwork-next.vercel.app'

export default defineConfig({
	name: 'default',
	title: 'Formwork Next',
	projectId,
	dataset,
	// basePath: '/admin',
	plugins: [
		deskTool({
			structure,
			defaultDocumentNode,
		}),
		noteField(),
	],
	schema: {
		types: schemaTypes,
	},
})
