import Modal from 'react-bootstrap/Modal'
import { useEffect } from 'react'
import { Formik } from 'formik'
import { CREATE_LEADS, SPECIFIC_LEAD, UPDATE_LEAD } from '../queries'
import { useLazyQuery, useMutation } from '@apollo/client'
import { schema } from '../../../utils/leadModalUtils'
import FormikFormComponent from './FormikFormComponent'

import '../lead-modal.css'

function VerticalCenteredModal(props) {
	const [createLeads] = useMutation(CREATE_LEADS)
	const [updateLead] = useMutation(UPDATE_LEAD)

	const [getLead] = useLazyQuery(SPECIFIC_LEAD, {
		onCompleted: (res) => {
			props.setSpecificLead(res.lead.data)
		},
	})

	useEffect(() => {
		if (props.modalOpen === false) {
			props.setSpecificLead(null)
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [props.modalOpen])

	useEffect(() => {
		if (props.leadOptions !== -1) {
			getLead({ variables: { id: props.tableData[props.leadOptions].id } })
		}
	}, [props.leadOptions, getLead, props.tableData])

	return (
		<Modal {...props} size='lg' aria-labelledby='contained-modal-title-vcenter' centered>
			<Modal.Body className='modal-lead-container'>
				<Modal.Title id='contained-modal-title-vcenter' className='lead-title'>
					Lead
				</Modal.Title>
			</Modal.Body>
			<Modal.Body>
				<Formik
					validationSchema={schema}
					onSubmit={(values, { setSubmitting, resetForm }) => {
						setSubmitting(true)
						if (props.modalType === 'add') {
							createLeads({
								variables: {
									name: values.name,
									number: values.number,
									status: values.status,
									source: values.source,
									email: values.email,
									notes: values.notes,
									date: new Date().toISOString().slice(0, 10),
									time: new Date().toISOString().slice(11, 19),
								},
								onCompleted: () => {
									props.refetchLeads()
								},
							})
						} else if (props.modalType === 'edit') {
							updateLead({
								variables: {
									id: props.sepecificLead.id,
									name: values.name,
									number: values.number,
									status: values.status,
									source: values.source,
									email: values.email,
									notes: values.notes,
									date: new Date().toISOString().slice(0, 10),
									time: new Date().toISOString().slice(11, 19),
								},
								onCompleted: () => {
									props.refetchLeads()
								},
							})
							resetForm()
						}

						setSubmitting(false)
						props.setModalOpen(false)
						resetForm()
					}}
					initialValues={{
						status: `${props.sepecificLead ? props.sepecificLead.attributes.Status : 'New'}`,
						source: `${props.sepecificLead ? props.sepecificLead.attributes.Source : 'website'}`,
						name: `${props.sepecificLead ? props.sepecificLead.attributes.Name : ''}`,
						number: `${props.sepecificLead ? props.sepecificLead.attributes.Number : ''}`,
						email: `${props.sepecificLead ? props.sepecificLead.attributes.email : ''}`,
						notes: `${props.sepecificLead ? props.sepecificLead.attributes.Notes : ''}`,
					}}
				>
					{({ handleSubmit, handleChange, values, touched, errors, isSubmitting }) => (
						<FormikFormComponent
							handleSubmit={handleSubmit}
							handleChange={handleChange}
							values={values}
							touched={touched}
							errors={errors}
							isSubmitting={isSubmitting}
							props={props}
						/>
					)}
				</Formik>
			</Modal.Body>
		</Modal>
	)
}

export default VerticalCenteredModal
