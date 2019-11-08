import React from 'react';
import { Formik, Field, Form } from 'formik';
import { 
  TextField,
  Button,
  Checkbox 
} from '@material-ui/core'
import * as yup from "yup";


const Basic = () => (
  <>
    <Formik
      initialValues={{ 
        firstName: '', 
        lastName: '',
        isTall: false,
        cookies: [] 
      }}
      onSubmit={(data, { setSubmitting })=> {
        setSubmitting(true)
        // make aynsc call
        console.log('Submit: ', data)
        setSubmitting(false)
      }}
    >
      {({ values, isSubmitting }) => (
        <Form>
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
          <Field name="isTall" type="checkbox" as={Checkbox} />
          <div>Cookies: </div>
          <Field name="cookies" value="abc" type="checkbox" as={Checkbox} />
          <Field name="cookies" value="123" type="checkbox" as={Checkbox} />
          <Field name="cookies" value="jkl" type="checkbox" as={Checkbox} />
          <div>
            <Button disabled={isSubmitting} type='submit'>Submit</Button>
          </div>
          <pre>{JSON.stringify({
            values: values,
            cookiesLength: values.cookies.length
          }, null, 2)}</pre>
        </Form>
      )}
    </Formik>
  </>
);

export default Basic;