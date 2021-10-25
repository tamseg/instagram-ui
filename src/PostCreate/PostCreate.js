import React from 'react';
import { Field, Formik, Form, ErrorMessage } from 'formik';
import { useHistory } from 'react-router';
import { create } from '../services/post.service';
import { postSchema } from './post.schema';

function PostCreate() {

    const history = useHistory();

    async function submit(values) {
        try {
            await create(values);
            history.push('/');
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <div className="container">
            <Formik 
                initialValues = {{ body: '', image: null }}
                validationSchema = {postSchema}
                onSubmit = {submit}>
                {({setFieldValue}) => (
                    <Form className="form">
                        <h1 className="header">New post</h1>
                        <div className="formGroup">
                            <label htmlFor="body" className="labelAndField"></label>
                            <input type="file" name="image" onChange={e => {
                                setFieldValue('image', e.currentTarget.files[0]);
                            }} />
                            <div className="errorMessage">
                                <ErrorMessage name="image" className="errorMessage" />
                            </div>
                            <Field id="body" name="body" placeholder="Write a post" className="labelAndFeild field" />
                            <div className="errorMessage">
                                <ErrorMessage name="body" className="errorMessage" />
                            </div>
                        </div>
                        <div className="buttonWrapper">
                            <button type="submit" className="button">Create Post</button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default PostCreate;