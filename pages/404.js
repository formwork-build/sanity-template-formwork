import { query404 } from '@lib/queries'
import { client } from '@lib/sanity.server'
import Link from 'next/link'

export default function FourOhFour() {
	return (
		<div className='py-48 grid px-5'>
			<h4 className='grid-cols-12 mb-3'>404 - Page Not Found</h4>
			<div className='grid-cols-12'>
				<Link href="/">
					Click here to go home
				</Link>
			</div>
		</div>
	)
}

export async function getStaticProps() {
	const data = await client.fetch(query404)

	return {
		props: { data },
		revalidate: process.env.SANITY_REVALIDATE_SECRET ? 60 : 60,
	}
}