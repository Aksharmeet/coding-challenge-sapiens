import { Container, Navbar } from 'react-bootstrap'
import Bell from 'react-bootstrap-icons/dist/icons/bell'
import Stack from 'react-bootstrap/Stack'

import styles from './top.module.css'
import MenuGrid from '../../assets/component_svg/menuGrid'
import { CircleFill } from 'react-bootstrap-icons'

export function UnauthenticatedNav() {
	return (
		<Navbar className='navbar navbar-dark position-fixed w-100' style={{ backgroundColor: 'var(--bg-dark)', color: '#fff' }} expand='lg'>
			<Container fluid className={`d-flex aligm-items-center ${styles.customContianer}`}>
				<Navbar.Brand href='/' className='text-muted' style={{ position: 'relative' }}>
					<img src='https://sapien.systems/SapienLogo.svg' alt='sapien logo' className={styles.sapienLogo} />
					<strong className={styles.sapienText}>SAPIEN SYSTEMS</strong>
					<p className={styles.betaText}>BETA</p>
				</Navbar.Brand>

				<p className={styles.hashTagText}>#BeAChangeMaker</p>

				<Stack direction='horizontal' className={styles.customTopHstack}>
					<div>
						<Bell fontSize='22px' />
					</div>
					<div>
						<MenuGrid fontSize='28px' />
					</div>
					<div>
						<CircleFill fontSize='28px' />
					</div>
				</Stack>
			</Container>
		</Navbar>
	)
}
