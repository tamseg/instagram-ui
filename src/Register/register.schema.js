import * as yup from 'yup';
import { checkUsernameAvailability } from '../services/user.service';

export const registerSchema = yup.object().shape({
    username: yup.string()
        .min(3, 'Username must contain at least 3 characters')
        .max(16, "Username can't contain more than 16 characters")
        .required('Please enter you awesome username :)')
        .test("username", 'This username is already taken', async function (username) {
            return await checkUsernameAvailability(username);
        }),
    email: yup.string()
        .email('The email address is invalid')
        .required("Don't forget to enter your Email ;)"),
    password: yup.string()
        .min(6, 'Password must contain at least 6 characters')
        .max(20, "Password can't contain more than 20 characters")
        .required('Oops! Password field is empty :/')
});