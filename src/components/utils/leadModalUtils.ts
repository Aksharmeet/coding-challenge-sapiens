import * as yup from 'yup';

export const schema = yup.object().shape({
    name: yup.string().required(),
    number: yup.string().required(),
    status: yup.string().required(),
    source: yup.string().required(),
    email: yup.string().email().required(),
    notes: yup.string().required(),
})

export const modalType = (props) => {
    if (props.modalType === 'add') return 'Save'
    if (props.modalType === 'edit') return 'Update'
    if (props.modalType === 'view') return 'Close'
    if (props.modalType === 'delete') return 'Delete'
}