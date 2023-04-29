import Header from '../../components/dashboard/Header/Header'
import SearchBox from '../../components/dashboard/SearchBox/SearchBox'
import AddLeadButton from '../../components/dashboard/addLeadButton/AddLeadButton'
import Table from '../../components/dashboard/Table/Table'
import { Stack } from 'react-bootstrap'
import { GET_LEADS } from './queries'
import { useState } from 'react'
import { useQuery } from '@apollo/client'
import { flattenObj } from '../../components/utils/responseFlatten'
import LeadModal from '../../components/dashboard/LeadModal/LeadModal'
import './dashboard.css'
import VerticalNavCollapse from '../../components/layout/verticalNavCollapse'
function Index() {
	const [tableData, setTableData] = useState([])
	const [modalOpen, setModalOpen] = useState(false)
	const [modalType, setModalType] = useState('add')
	const [leadOptions, setLeadOptions] = useState(-1)
	const [specificLead, setSpecificLead]: [any, any] = useState(null)

	const { refetch } = useQuery(GET_LEADS, {
		onCompleted: (res) => {
			let leads = flattenObj(res.leads.data)
				.map((a) => {
					a.id = Number(a.id)
					return a
				})
				.sort((a, b) => b.id - a.id)
			setTableData(leads)
		},
	})

	return (
		<section className='dashboard-container'>
			<VerticalNavCollapse />
			<Stack>
				<Header />

				<div className='d-flex align-items-center search-addLeadButton-container   gap-5'>
					<SearchBox />
					<AddLeadButton setModalOpen={setModalOpen} setModalType={setModalType} setLeadOptions={setLeadOptions} setSpecificLead={setSpecificLead} />
					<LeadModal
						modalOpen={modalOpen}
						setModalOpen={setModalOpen}
						modalType={modalType}
						leadOptions={leadOptions}
						tableData={tableData}
						setSpecificLead={setSpecificLead}
						sepecificLead={specificLead}
						refetchLeads={refetch}
					/>
				</div>
				<div>
					<Table
						tableData={tableData}
						setModalOpen={setModalOpen}
						setModalType={setModalType}
						leadOptions={leadOptions}
						setLeadOptions={setLeadOptions}
						refetchLeads={refetch}
					/>
				</div>
			</Stack>
		</section>
	)
}

export default Index
