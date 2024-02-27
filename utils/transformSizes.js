let transformSizes = str => {
	if(!str) return undefined
	let s = ''
	const small = str.split(' ')[0]
	const medium = str.includes('md:') ? str.split('md:')[1].split(' ')[0] : null
	const large = str.includes('lg:') ? str.split('lg:')[1].split(' ')[0] : null
	const xlarge = str.includes('xl:') ? str.split('xl:')[1] : null

	if(xlarge){
		s = `${xlarge}`
	} 

	if(large && s === ''){
		s = `${large}`
	} else if(large) {
		s = `(max-width: 1280px) ${large}, ` + s
	}

	if(medium && s === ''){
		s = `${medium}`
	} else if(medium) {
		s = `(max-width: 1024px) ${medium}, ` + s
	}

	if(small && s === ''){
		s = `${small}`
	} else if(small) {
		s = `(max-width: 768px) ${small}, ` + s
	}

	return s
}

export default transformSizes