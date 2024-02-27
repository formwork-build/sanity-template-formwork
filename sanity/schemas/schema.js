// Documents
import page from './documents/page'

// Singletons
import siteSettings from './singletons/siteSettings'
import redirect from './singletons/redirect'
import homePage from './singletons/homePage'

// Objects
import seo from './objects/seo'
import richText from './objects/richText'
import basicText from './objects/basicText'
import basicTextWithLinks from './objects/basicTextWithLinks'
import imageWithCaption from './objects/imageWithCaption'
import imageWithAlt from './objects/imageWithAlt'
import link from './objects/link'
import button from './objects/button'

export const schemaTypes = [
	// Documents
	siteSettings,
	redirect,
	page,
	homePage,

	//Objects
	seo,
	richText,
	basicText,
	basicTextWithLinks,
	imageWithCaption,
	imageWithAlt,
	link,
	button,

]
