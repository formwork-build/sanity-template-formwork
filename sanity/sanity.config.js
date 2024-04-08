
import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { schemaTypes } from './schemas/schema'
import { structure } from './deskStructure'
import defaultDocumentNode from './defaultDocumentNode'
import { noteField } from 'sanity-plugin-note-field'


export const projectId = '20y199p2'
export const dataset = 'production'
export const vercelUrl = 'https://formwork-next.vercel.app'

const singletonActions = new Set(["publish", "discardChanges", "restore"])

const singletonTypes = new Set(["homePage", "siteSettings"])

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
    templates: (templates) =>
      templates.filter(({ schemaType }) => !singletonTypes.has(schemaType)),
  },
	document: {
    actions: (input, context) =>
      singletonTypes.has(context.schemaType)
        ? input.filter(({ action }) => action && singletonActions.has(action))
        : input,
  },
})
