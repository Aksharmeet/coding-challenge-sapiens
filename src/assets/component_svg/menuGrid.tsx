// icon:grid-dots | Tabler Icons https://tablericons.com/ | Csaba Kissi
import * as React from 'react'

function MenuGrid(props: React.SVGProps<SVGSVGElement>) {
	return (
		<svg
			fill='none'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={2}
			viewBox='0 0 24 24'
			height='1em'
			width='1em'
			{...props}
		>
			<path stroke='none' d='M0 0h24v24H0z' />
			<path d='M6 5 A1 1 0 0 1 5 6 A1 1 0 0 1 4 5 A1 1 0 0 1 6 5 z' />
			<path d='M13 5 A1 1 0 0 1 12 6 A1 1 0 0 1 11 5 A1 1 0 0 1 13 5 z' />
			<path d='M20 5 A1 1 0 0 1 19 6 A1 1 0 0 1 18 5 A1 1 0 0 1 20 5 z' />
			<path d='M6 12 A1 1 0 0 1 5 13 A1 1 0 0 1 4 12 A1 1 0 0 1 6 12 z' />
			<path d='M13 12 A1 1 0 0 1 12 13 A1 1 0 0 1 11 12 A1 1 0 0 1 13 12 z' />
			<path d='M20 12 A1 1 0 0 1 19 13 A1 1 0 0 1 18 12 A1 1 0 0 1 20 12 z' />
			<path d='M6 19 A1 1 0 0 1 5 20 A1 1 0 0 1 4 19 A1 1 0 0 1 6 19 z' />
			<path d='M13 19 A1 1 0 0 1 12 20 A1 1 0 0 1 11 19 A1 1 0 0 1 13 19 z' />
			<path d='M20 19 A1 1 0 0 1 19 20 A1 1 0 0 1 18 19 A1 1 0 0 1 20 19 z' />
		</svg>
	)
}

export default MenuGrid
