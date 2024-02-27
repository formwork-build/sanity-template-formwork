import { IoSwapHorizontalOutline } from 'react-icons/io5'
export default {
	title: 'Redirect',
	name: 'redirect',
	type: 'document',
	icon: IoSwapHorizontalOutline,
	fields: [
		{
			title: 'Internal Name',
			name: 'internalName',
			type: 'string',
			validation: Rule => Rule.required(),
		},
		{
			name: 'source',
			title: 'From',
			description:
        'Path matches are allowed, for example /old-blog/:slug',
			type: 'string',
		},
		{
			name: 'destination',
			title: 'To',
			description:
        'Path matches are allowed, for example /blog/:slug',
			type: 'string',
		},
		{
			name: 'permanent',
			title: 'Permanent',
			type: 'boolean',
			initialValue: () => true,
		},
	],
	preview: {
		select: {
			title: 'internalName',
			source: 'source',
			destination: 'destination',
		},
		prepare: ({ title, source, destination }) => ({
			title,
			subtitle: `${source} → ${destination}`,
		}),
	},
}
