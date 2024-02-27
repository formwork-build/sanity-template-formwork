// import SocialPreview from './components/SocialPreview.jsx'

import {
	IoDocument,
	IoSwapHorizontalOutline,
	IoSettingsSharp,
} from 'react-icons/io5'


export const structure = (S) => 
	S.list()
		.title('Content')
		.items([
			S.listItem()
				.title('Pages')
				.icon(IoDocument)
				.child(
					S.documentList()
						.title('Pages')
						.filter('_type in ["page", "homePage"]')
				),
			S.divider(),
			S.listItem()
				.title('Settings')
				.icon(IoSettingsSharp)
				.child(
					S.list()
						.title('Settings')
						.items([
							S.listItem()
								.title('Site Settings')
								.icon(IoSettingsSharp)
								.child(
									S.editor()
										.schemaType('siteSettings')
										.documentId('siteSettings')
								),
							S.listItem()
								.title('Redirects')
								.icon(IoSwapHorizontalOutline)
								.child(
									S.documentTypeList('redirect')
										.title('Redirects')
								),
						])),
		])
