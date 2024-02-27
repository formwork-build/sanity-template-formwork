import { IoArrowForwardCircleOutline } from 'react-icons/io5'

export default {
	name: 'button',
	type: 'object',
	title: 'Button',
	icon: IoArrowForwardCircleOutline,
	fields: [
		{
			name: 'text',
			type: 'string',
			description: 'Button will only appear if text is set.',
		},
		{
			name: 'link',
			type: 'link',
		},
	],
	preview: {
		select: {
			title: 'text',
		},
		prepare({ title }) {
			return {
				title: title,
			}
		}
	}
}