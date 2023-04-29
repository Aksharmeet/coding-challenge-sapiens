import { PlusCircle } from 'react-bootstrap-icons'

import './addLeadButton.css'

function AddLeadButton({ setModalOpen, setModalType, setLeadOptions, setSpecificLead }) {
	return (
		<div
			className='d-flex p-2  add-plus-container'
			onClick={() => {
				setSpecificLead(null)
				setModalType('add')
				setLeadOptions(-1)
				setModalOpen((prev) => !prev)
			}}
		>
			<p className='addLead-text'>Add Lead</p>
			<PlusCircle color='#000' fontSize='25px' />
		</div>
	)
}

export default AddLeadButton
