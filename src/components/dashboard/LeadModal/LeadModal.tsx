import VerticalCenteredModal from './VerticalCenteredModal/VerticalCenteredModal'

function LeadModal({ modalOpen, setModalOpen, modalType, leadOptions, tableData, sepecificLead, setSpecificLead, refetchLeads }) {
	return (
		<>
			<VerticalCenteredModal
				show={modalOpen}
				onHide={() => setModalOpen(false)}
				modalType={modalType}
				leadOptions={leadOptions}
				tableData={tableData}
				setModalOpen={setModalOpen}
				setSpecificLead={setSpecificLead}
				sepecificLead={sepecificLead}
				refetchLeads={refetchLeads}
			/>
		</>
	)
}

export default LeadModal
