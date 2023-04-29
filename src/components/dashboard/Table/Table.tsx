import { Card, Table } from 'react-bootstrap'
import VerticalDots from 'react-bootstrap-icons/dist/icons/three-dots-vertical'
import { format } from 'date-fns'
import SliceCharTo14 from '../../utils/sliceToChar14'

import './table.css'
import { useEffect } from 'react'
import { DELETE_LEAD } from './queries'
import { useMutation } from '@apollo/client'

function TableWithCards({ tableData, setModalOpen, setModalType, leadOptions, setLeadOptions, refetchLeads }) {
	const openLeadOption = (i: number) => {
		if (leadOptions === i) {
			setLeadOptions(-1)
		} else {
			setLeadOptions(i)
		}
	}
	useEffect(() => {
		if (leadOptions === -1) return
		const handleClick = () => setLeadOptions(-1)
		window.addEventListener('click', handleClick)
		return () => {
			window.removeEventListener('click', handleClick)
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [leadOptions])

	const [deleteLead] = useMutation(DELETE_LEAD)

	const deleteLeadFn = () => {
		deleteLead({
			variables: {
				id: tableData[leadOptions].id,
			},
		})
		refetchLeads()
		setLeadOptions(-1)
	}

	return (
		<div className='table-container'>
			<Table responsive borderless>
				<thead>
					<tr className='tr-th-container'>
						<th className='tr-content' id='td-leadDate'>
							Lead Date
						</th>
						<th className='tr-content' id='td-name'>
							Name
						</th>
						<th className='tr-content'>Number</th>
						<th className='tr-content' id='td-email'>
							Email
						</th>
						<th className='tr-content' id='td-source'>
							Source
						</th>
						<th className='tr-content' id='td-lastUpdates'>
							Last Updated
						</th>
						<th className='tr-content' id='td-status'>
							Status
						</th>
					</tr>
				</thead>
				<div className='table-divide' />
				<tbody className='tbody-container'>
					{tableData.length > 0 &&
						tableData.map((data, i: number) => (
							<tr key={data.id} className='tr-tb-container position-relative'>
								{/* {<div>not seen</div> */}
								{data.Status === 'New' ? <div className='not-seen-text-container'>Not Seen</div> : ''}
								<td className='tr-content tr-tb-content' id='td-leadDate'>
									{format(new Date(data.createdAt), 'MMM dd, yyyy')}
								</td>
								<td className='tr-content tr-tb-content' id='td-name'>
									{SliceCharTo14(data.Name)}
								</td>
								<td className='tr-content tr-tb-content' id='td-number'>
									{SliceCharTo14(data.Number)}
								</td>
								<td className='tr-content tr-tb-content' id='td-email'>
									{SliceCharTo14(data.email)}
								</td>
								<td className='tr-content tr-tb-content' id='td-source'>
									{SliceCharTo14(data.Source)}
								</td>
								<td className='tr-content tr-tb-content' id='td-lastUpdated'>
									{format(new Date(data.updatedAt), 'dd MMMM yyyy')}
								</td>
								<td className='tr-content tr-tb-content' id='td-status'>
									{data.Status}
								</td>
								<td className='tr-content tr-tb-content' style={{ cursor: 'pointer' }} id='td-dots'>
									<VerticalDots fontSize='25px' color='#000' onClick={() => openLeadOption(i)} />
								</td>
								{leadOptions === i && (
									<Card
										className='lead-options position-absolute shadow d-flex gap-2 '
										style={{ right: '80px', top: '-70px', padding: '15px 40px 30px 15px', background: '#fff', border: 0, zIndex: '1000' }}
									>
										<div
											className='lead-options-content'
											onClick={() => {
												setModalType('edit')
												setModalOpen((prev) => !prev)
											}}
										>
											<p className='lead-options-content-text'>Edit</p>
										</div>
										<div
											className='lead-options-content'
											onClick={() => {
												setModalType('view')
												setModalOpen((prev) => !prev)
											}}
										>
											<p className='lead-options-content-text'>View</p>
										</div>
										<div className='lead-options-content' onClick={() => deleteLeadFn()}>
											<p className='lead-options-content-text'>Delete</p>
										</div>
									</Card>
								)}
							</tr>
						))}
				</tbody>
			</Table>
		</div>
	)
}

export default TableWithCards
