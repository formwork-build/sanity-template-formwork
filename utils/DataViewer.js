import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
const ReactJson = dynamic(() => import('react-json-view-ssr'), {
	ssr: false,
})

const DataViewer = ({ data, name }) => {
	const isDev = process.env.VERCEL_ENV === 'development' || process.env.NODE_ENV === 'development'
	const [visible, setVisible] = useState(false)

	const initDataViewer = async () => {
		if(isDev){
			document.addEventListener('keydown', e => {
				if(e.code === 'KeyD'){
					setVisible(prevVis => !prevVis)
				}
			})
		}
	}
	
	useEffect(() => {
		initDataViewer()
	}, [isDev])

	if(!isDev) return null
	

	return  <div className={`fixed inset-0 opacity-95 overflow-y-scroll text-sm ${visible ? 'block' : 'hidden'}`} style={{zIndex: 900, background: 'rgb(43, 48, 59)'}}>
		<ReactJson 
			src={data} 
			name={name} 
			indentWidth={2} 
			collapsed={true} 
			theme='ocean' 
			style={{padding: '20px'}} 
			enableClipboard={false} 
		/>
	</div>
}
export default DataViewer