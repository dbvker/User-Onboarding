import * as yup from 'yup';

const formSchema = yup.object().shape({
    name: yup
        .string()
        .required('Name is required'),
    email: yup
        .string()
        .email('Must be a valid email')
        .required('Email is required'),
    password: yup
        .string()
        .required('Password is required')
        .min(6, 'Password must be at least 6 characters long'),
    terms: yup
        .boolean()
        .oneOf([true], 'You must agree to the Terms of Service!')
});

export default formSchema;