import Button from 'react-bootstrap/Button'
import { Stack } from 'react-bootstrap'
import { Form } from 'react-bootstrap'
import { Field, Form as FormikForm } from 'formik'
import { modalType } from '../../../utils/leadModalUtils'

function FormikFormComponent({ values, handleSubmit, handleChange, props, touched, errors, isSubmitting }) {
	return (
		<>
			<FormikForm onSubmit={handleSubmit}>
				<Stack gap={4}>
					<Form.Group controlId='controlId-status' className='position-relative'>
						<Form.Label className='form-label-text'>Status</Form.Label>
						<div className='position-relative w-25'>
							<Field
								as='select'
								name='status'
								className='w-100 form-control select  form-label-field'
								value={values.status}
								onChange={handleChange}
								disabled={props.modalType === 'view'}
							>
								<option value='New'>New</option>
								<option value='Intrested'> Interested</option>
								<option value='Follow_up'> Follow_up</option>
								<option value='Negative'> Negative</option>
								<option value='Enrolled'> Enrolled</option>
							</Field>
							<div style={{ position: 'absolute', top: 6, right: 5, pointerEvents: 'none' }}>
								<img src='https://img.icons8.com/ios-glyphs/30/null/expand-arrow--v1.png' width='20px' height='20px' alt='expand down' />
							</div>
						</div>
					</Form.Group>
					<Form.Group controlId='controlId-source' className='position-relative'>
						<Form.Label className='form-label-text'>Source</Form.Label>
						<div className='position-relative w-25'>
							<Field as='select' name='source' className='w-100 form-control select form-label-field' disabled={props.modalType === 'view'}>
								<option value='website'>Website</option>
								<option value='google'>Google</option>
								<option value='my_app'>My App</option>
								<option value='word_of_mouth'>Word Of Mouth</option>
							</Field>
							<div style={{ position: 'absolute', top: 6, right: 5, pointerEvents: 'none' }}>
								<img src='https://img.icons8.com/ios-glyphs/30/null/expand-arrow--v1.png' width='20px' height='20px' alt='expand down' />
							</div>
						</div>
					</Form.Group>

					<Stack gap={3}>
						<h5 className='form-label-text-h'>Lead Details</h5>
						<div />
						<Form.Group className='mr-5'>
							<Form.Label htmlFor='inputName' className='form-label-text'>
								Name
							</Form.Label>
							<Form.Control
								type='text'
								name='name'
								id='inputName'
								value={values.name}
								onChange={handleChange}
								isInvalid={touched.name && !!errors.name}
								placeholder='Enter Name'
								className='form-label-field'
								disabled={props.modalType === 'view'}
							/>
							<Form.Control.Feedback type='invalid'>{errors.name}</Form.Control.Feedback>
						</Form.Group>
						<Form.Group className='mr-5'>
							<Form.Label htmlFor='inputNumber' className='form-label-text'>
								Number
							</Form.Label>
							<Form.Control
								type='text'
								name='number'
								id='inputNumber'
								value={values.number}
								onChange={handleChange}
								isInvalid={touched.number && !!errors.number}
								placeholder='Enter Number'
								className='form-label-field'
								disabled={props.modalType === 'view'}
							/>
							<Form.Control.Feedback type='invalid'>{errors.number}</Form.Control.Feedback>
						</Form.Group>
						<Form.Group className='mr-5'>
							<Form.Label htmlFor='inputEmail' className='form-label-text'>
								Email
							</Form.Label>
							<Form.Control
								type='email'
								name='email'
								id='inputEmail'
								value={values.email}
								onChange={handleChange}
								isInvalid={touched.email && !!errors.email}
								placeholder='Enter Email'
								className='form-label-field'
								disabled={props.modalType === 'view'}
							/>
							<Form.Control.Feedback type='invalid'>{errors.email}</Form.Control.Feedback>
						</Form.Group>
						<Form.Group className='mr-5'>
							<Form.Label htmlFor='inputNotes' className='form-label-text'>
								Notes
							</Form.Label>
							<Form.Control
								as='textarea'
								name='notes'
								id='inputNotes'
								rows={5}
								value={values.notes}
								onChange={handleChange}
								isInvalid={touched.notes && !!errors.notes}
								placeholder='Write a Note'
								className='form-label-field'
								disabled={props.modalType === 'view'}
							/>
							<Form.Control.Feedback type='invalid'>{errors.notes}</Form.Control.Feedback>
						</Form.Group>
					</Stack>
				</Stack>
				<div className='d-flex w-100 justify-items-center'>
					<Button
						variant='success'
						className='w-50 mx-auto my-5'
						style={{ borderRadius: '50px', fontWeight: 600 }}
						type='submit'
						disabled={isSubmitting}
					>
						{modalType(props)}
					</Button>
				</div>
			</FormikForm>
		</>
	)
}

export default FormikFormComponent
