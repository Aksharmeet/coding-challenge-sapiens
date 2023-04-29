import Search from 'react-bootstrap-icons/dist/icons/search'
import { Form } from 'react-bootstrap'

import './searchbox.css'

function SearchBox() {
	return (
		<Form className='d-flex gap-3 align-items-center searchbox-container w-100'>
			<div>
				<Search fontSize='30px' color='#aaa' />
			</div>
			<div className='w-100'>
				<Form.Control type='search' className='me-2 search-box' aria-label='Search' />
			</div>
		</Form>
	)
}

export default SearchBox
