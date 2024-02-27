// To use, make sure that you've added the following line to your computer's /.bashrc or zshrc
// export EDITOR="code -w"

// You'll also need to make sure the code cli is enabled, if it isn't follow these instructions: 
// https://stackoverflow.com/questions/29955500/code-is-not-working-in-on-the-command-line-for-visual-studio-code-on-os-x-ma

/**
 * Convenient way to edit a document in your $EDITOR.
 * Usage: `node scripts/editDocument.js <documentId>`
 */

const { spawn } = require('child_process')

const [documentId] = process.argv.slice(2)

if (!documentId) {
	throw new Error('No document id was provided.')
}

spawn('sanity', ['documents', 'create', '--id', documentId, '--watch', '--replace'], {
	cwd: process.cwd(),
	stdio: 'inherit',
})