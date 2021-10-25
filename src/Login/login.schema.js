import * as yup from 'yup';

export const loginSchema = yup.object().shape({
    username: yup.string()
        .min(3, 'Username is too short')
        .max(16, 'Username is too long')
        .required('Please enter your username'),
    password: yup.string()
        .min(6, 'Password is too short')
        .max(20, 'Password is too long')
        .required('Please enter your password')
});