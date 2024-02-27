import React from 'react'
import linkableDocs from '../../utils/linkableDocs'
import { IoLink } from 'react-icons/io5'

export default {
	title: 'Link',
	name: 'link',
	type: 'object',
	icon: IoLink,
	fields: [
		{
			name: 'linkType',
			type: 'string',
			validation: Rule => Rule.required(),
			options: {
				list:['internal', 'external', 'file'],
				layout: 'radio',
			},
			initialValue: 'internal'
		},
		{
			name: 'url',
			type: 'url',
			title: 'URL',
			description: 'Should start with https:// or http://',
			validation: Rule =>
				Rule.uri({
					// allowRelative: true,
					scheme: ['https', 'http', 'mailto', 'tel']
				}),
			hidden: ({ parent }) => (!parent?.linkType || parent?.linkType !== 'external')
		},
		{
			title: 'Open in new tab',
			name: 'blank',
			type: 'boolean',
			initialValue: () => true,
			hidden: ({ parent }) => (!parent?.linkType || parent?.linkType !== 'external')
		},
		{
			name: 'document',
			type: 'reference',
			options: {
				disableNew: true,
			},
			to: linkableDocs,
			hidden: ({ parent }) => (!parent?.linkType || parent?.linkType !== 'internal')
		},
		{
			name: 'file',
			type: 'file',
			hidden: ({ parent }) => (!parent?.linkType || parent?.linkType !== 'file')
		}
	],
	preview: {
		select: {
			title: 'title',
		},
		prepare({ title }) {
			return {
				title: title,
			}
		}
	}
}