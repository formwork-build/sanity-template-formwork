export default async function exit(req, res) {
	// Exit the current user from "Preview Mode". This function accepts no args.
	res.setDraftMode({ enable: false })

	// Redirect the user back to the index page.
	res.writeHead(307, { Location: req.query?.return ?? '/' })
	res.end()
}
