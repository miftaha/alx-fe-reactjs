import React from 'react'
import { Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

const RegistrationForm = () => {
  const initialValues = {
    username: '',
    email: '',
    password: '',
  }

  const validationSchema = Yup.object({
    username: Yup.string().required('Username is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().required('Password is required'),
  })

  const handleSubmit = (values) => {
    console.log('Form submitted:', values)
    // Here, you would typically send the form data to an API
  }

  return (
    <Form
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <Field name="username" type="text" placeholder="Username" />
      <ErrorMessage name="username" component="div" className="error" />

      <Field name="email" type="email" placeholder="Email" />
      <ErrorMessage name="email" component="div" className="error" />

      <Field name="password" type="password" placeholder="Password" />
      <ErrorMessage name="password" component="div" className="error" />

      <button type="submit">Register</button>
    </Form>
  )
}

export default RegistrationForm
