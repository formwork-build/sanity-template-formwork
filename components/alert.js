import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import PropTypes from 'prop-types'

export default function Alert({ className }) {
	const router = useRouter()
	const [visible, setVisible] = useState(false)
	const [active, setActive] = useState(false)
	useEffect(() => {
		if(window.location === window.parent.location){
			setVisible(true)
		}
	}, [])

	useEffect(() => {
		const timeout1 = setTimeout(() => {
			setActive(true)
		}, 500)
		const timeout2 = setTimeout(() => {
			setActive(false)
		}, 3000)
		return () => {
			clearTimeout(timeout1)
			clearTimeout(timeout2)
		}
	}, [])

	if(!visible) return null
	return (
		<div className='absolute inset-x-0 top-0 z-50 h-[64px]' onMouseEnter={() => setActive(true)} onMouseLeave={() => setActive(false)}>
			<div className={`flex items-center font-['arial'] center text-[15px] p-[8px] pl-[18px] z-50 bg-black bg-opacity-75 absolute top-[8px] left-1/2 text-white rounded-full transition duration-300 -translate-x-1/2 ${!active && '-translate-y-[64px]'}`}>
				This page is a preview. 
				<a className='flex items-center bg-white leading-0 text-black px-[18px] py-[4px] rounded-full ml-[10px] hover:bg-yellow-200 transition duration-300'
					href={`/api/exit-preview?return=${router?.asPath ?? '/'}`}
				>
					<span className='inline-block pr-[6px] pt-[2px] leading-0'>×</span> 
					Exit preview mode
				</a>
			</div>
		</div>
	)
}

Alert.propTypes = {
	className: PropTypes.string,
}
