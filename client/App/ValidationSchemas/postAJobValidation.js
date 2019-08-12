import * as Yup from 'yup'

export const seniorDetailsValidation = Yup.object().shape({
	seniorName: Yup
		.string()
		.required('This is a required field')
		.min(2, 'We shall not pass')
})