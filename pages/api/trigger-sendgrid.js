const sgMail = require('@sendgrid/mail')

export default async function handler(req, res){

	if (req.method !== 'POST' || !req.body) {
		return res.status(400).json({ error: 'Bad request' })
	}

	let data

	try {
		data = JSON.parse(req.body)
	} catch (error) {
		console.log('JSON parsing error:', error)
		return res.status(400).json({ error: 'Bad request body' })
	}

	try {
		sgMail.setApiKey(process.env.NEXT_SENDGRID)
		const msg = data
			
		return sgMail
			.send(msg)
			.then(() => {
				console.log('Email sent')
				return res.status(200).json({message: 'Email Sent'})
			})
			.catch((error) => {
				console.error(error)
				return res.status(500).json({error: error})
			})
		
	} catch (err) {
		console.error(err)
		return res.status(500).json({ error: err.message })
	}
  
}

