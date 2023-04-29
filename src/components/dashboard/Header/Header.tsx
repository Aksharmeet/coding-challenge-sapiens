import { Stack } from 'react-bootstrap'
import './header.css'

function Header() {
	return (
		<div>
			<h1 className='clients-text'>Clients</h1>
			<hr />
			<Stack direction='horizontal'>
				<p className='header-p-text'>Clients</p>
				<p className='header-p-text'>Tab 2</p>
				<p className='header-p-text'>Tab 3</p>
			</Stack>
			<hr />
		</div>
	)
}

export default Header
