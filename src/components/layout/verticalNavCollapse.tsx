import { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Offcanvas from 'react-bootstrap/Offcanvas'

// icons
import HouseDoor from 'react-bootstrap-icons/dist/icons/house-door'
import ChatLeft from 'react-bootstrap-icons/dist/icons/chat-left'
import Calendar4 from 'react-bootstrap-icons/dist/icons/calendar4'
import Person from 'react-bootstrap-icons/dist/icons/person'
import CalendarCheck from 'react-bootstrap-icons/dist/icons/calendar-check'
import Alt from 'react-bootstrap-icons/dist/icons/alt'
import Boxes from 'react-bootstrap-icons/dist/icons/boxes'
import BroadCast from 'react-bootstrap-icons/dist/icons/broadcast'
import CashCoin from 'react-bootstrap-icons/dist/icons/cash-coin'
import Gear from 'react-bootstrap-icons/dist/icons/gear'

import './verticalNav.css'

function VerticalNavCollapse() {
	const [show, setShow] = useState(false)

	function overrideToggle() {
		setShow((show) => !show)
	}
	return (
		<>
			{[false].map((expand: any) => (
				<Navbar key={expand} expand={expand} className='' expanded={show} onToggle={overrideToggle}>
					<Container fluid>
						<Navbar.Toggle className={show ? `navbar-toggler-animate custom-navbar-toggler` : 'custom-navbar-toggler'} />
						{/* */}
						<Navbar.Offcanvas
							id={`offcanvasNavbar-expand-${expand}`}
							aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
							placement='start'
							style={{
								width: '300px',
								backgroundColor: '--var(bg-dark)',
							}}
							className='custom-offcanvas'
						>
							<Offcanvas.Body>
								<Nav className='justify-content-end flex-grow-1 pt-4 pl-4 gap-4'>
									<Nav.Link href='#action1' className='d-flex gap-3 align-items-center'>
										<HouseDoor fontSize='22px' />
										Home
									</Nav.Link>
									<Nav.Link href='#action1' className='d-flex gap-3 align-items-center'>
										{' '}
										<ChatLeft fontSize='22px' />
										Chats
									</Nav.Link>
									<Nav.Link href='#action1' className='d-flex gap-3 align-items-center'>
										{' '}
										<Calendar4 fontSize='22px' />
										Schedule
									</Nav.Link>
									<Nav.Link href='#action1' className='d-flex gap-3 align-items-center'>
										{' '}
										<Person fontSize='22px' />
										Clients
									</Nav.Link>
									<Nav.Link href='#action1' className='d-flex gap-3 align-items-center'>
										{' '}
										<CalendarCheck fontSize='22px' />
										Bookings
									</Nav.Link>
									<Nav.Link href='#action1' className='d-flex gap-3 align-items-center'>
										{' '}
										<Alt fontSize='22px' />
										Programs
									</Nav.Link>
									<Nav.Link href='#action1' className='d-flex gap-3 align-items-center'>
										{' '}
										<Boxes fontSize='22px' />
										Packages
									</Nav.Link>
									<Nav.Link href='#action1' className='d-flex gap-3 align-items-center'>
										{' '}
										<BroadCast fontSize='22px' />
										Resources
									</Nav.Link>
									<Nav.Link href='#action1' className='d-flex gap-3 align-items-center'>
										{' '}
										<CashCoin fontSize='22px' />
										Finance
									</Nav.Link>
									<Nav.Link href='#action1' className='d-flex gap-3 align-items-center'>
										{' '}
										<Gear fontSize='22px' />
										Settings
									</Nav.Link>
								</Nav>
							</Offcanvas.Body>
						</Navbar.Offcanvas>
					</Container>
				</Navbar>
			))}
		</>
	)
}

export default VerticalNavCollapse
