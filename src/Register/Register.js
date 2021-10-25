import React from 'react';
import { Field, Formik, Form, ErrorMessage } from 'formik';
import { registerSchema } from './register.schema';
import { register } from '../services/user.service';
import './Register.scss';
import { useHistory } from 'react-router';

function Register() {

    const history = useHistory();

    async function submit(values) {
        try {
            const user = await register(values);
            history.push('/login')
            console.log(user);
        } catch(e) {
            console.log(e);
        }  
    }

    return (
        <div className="container">
            <Formik 
                initialValues = {{username: '', email: '', password: ''}}
                validationSchema = {registerSchema}
                onSubmit = {submit}>
                <Form className="form">
                    <h1 className="header">Registration</h1>
                    <div className="formGroup">
                        <label htmlFor="username" className="labelAndField"></label>
                        <Field id="username" name="username" placeholder="Username" className="labelAndField" className="field" />
                        <div className="errorMessage">
                            <ErrorMessage name="username" className="errorMessage" />
                        </div>
                    </div>
                    <div className="formGroup">
                        <label htmlFor="email" className="labelAndField"></label>
                        <Field type="email" id="email" name="email" placeholder="Email" className="labelAndField" className="field" />
                        <div className="errorMessage">
                            <ErrorMessage name="email" className="errorMessage" />
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
                        <button type="submit" className="button">Create account</button>
                    </div>
                </Form>
            </Formik>
        </div>
      );
}

export default Register;