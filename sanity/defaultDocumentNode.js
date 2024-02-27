// import {DefaultDocumentNodeResolver} from 'sanity/desk'
import Iframe from 'sanity-plugin-iframe-pane'
// import {SanityDocument} from 'sanity'
// import resolveLink from '@utils/resolveLink'
import { vercelUrl } from './sanity.config.js'
import linkableDocs from './utils/linkableDocs.js'

export default (S, {schemaType}) => {
	if (linkableDocs.map(doc => doc.type).includes(schemaType)){
		return S.document().views([
			S.view.form(),
			S.view
				.component(Iframe)
				.options({
					url: doc => `${window.location.host.includes('localhost') ? 'http://localhost:3000' : vercelUrl}/api/preview?slug=${doc?.slug?.current}&_type=${doc?._type}`,
					showDisplayUrl: false,
				})
				.title('Preview'),
		])
	} else {
		return S.document().views([S.view.form()])
	}
}