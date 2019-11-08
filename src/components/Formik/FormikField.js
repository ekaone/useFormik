import React from 'react';
import { Formik, Field } from 'formik';
import { 
  TextField,
  Button 
} from '@material-ui/core'
import * as yup from "yup";


const Basic = () => (
  <>
    <Formik
      initialValues={{ firstName: '', lastName: '' }}
      onSubmit={(data, { setSubmitting })=> {
        setSubmitting(true)
        // make aynsc call
        console.log('Submit: ', data)
        setSubmitting(false)
      }}
    >
      {({ values, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
        <form onSubmit={handleSubmit}>
          <Field 
            placeholder='First name'
            name='firstName'
            type='input'
            as={TextField}
          />
          <div>
          <Field 
            placeholder='Last name'
            name='lastName'
            type='input'
            as={TextField}
          />
          </div>
          <div>
            <Button disabled={isSubmitting} type='submit'>Submit</Button>
          </div>
          <pre>{JSON.stringify(values, null, 2)}</pre>
        </form>
      )}
    </Formik>
  </>
);

export default Basic;