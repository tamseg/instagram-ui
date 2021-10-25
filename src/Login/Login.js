import React, { useContext } from 'react';
import { Field, Formik, Form, ErrorMessage } from 'formik';
import { UserContext } from '../App';
import { login, me } from '../services/user.service';
import { loginSchema } from './login.schema';
import './Login.scss';
import { useHistory } from 'react-router';

function Login() {
    const history = useHistory();
    const { setUser } = useContext(UserContext);

    async function submit(values) {
        try {
            const {token} = await login(values);
            localStorage.setItem('token', token);
            const loggedUser = await me();
            setUser(loggedUser);
            history.push('/');
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className="container">
            <Formik 
                initialValues = {{username: '', password: ''}}
                validationSchema = {loginSchema}
                onSubmit = {submit}>
                <Form className="form">
                    <h1 className="header">Sign in</h1>
                    <div className="formGroup">
                        <label htmlFor="username" className="labelAndField"></label>
                        <Field id="username" name="username" placeholder="Username" className="labelAndField" className="field" />
                        <div className="errorMessage">
                            <ErrorMessage name="username" className="errorMessage" />
                        </div>
                    </div>
                    <div className="formGroup">
                        <label htmlFor="password" className="labelAndField"></label>
                        <Field type="password" id="password" name="password" placeholder="Password" className="labelAndField" className="field" />
                        <div className="errorMessage">
                            <ErrorMessage name="password" />
                        </div>
                    </div>
                    <div className="buttonWrapper">
                        <button type="submit" className="button">Sign in</button>
                    </div>
                    <div className="forgotPassword">
                        Forgot your password? <a href=''>Click here!</a>
                    </div>
                </Form>
            </Formik>
        </div>
    );
};

export default Login;