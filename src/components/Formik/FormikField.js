import React from 'react';
import { Formik, Field, Form } from 'formik';
import { 
  TextField,
  Button,
  Checkbox,
  Radio 
} from '@material-ui/core'
import * as yup from "yup";


const Basic = () => (
  <>
    <Formik
      initialValues={{ 
        firstName: '', 
        lastName: '',
        isTall: false,
        cookies: [],
        yogurt: ""  
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
          <Field name="isTall" type="checkbox" as={Checkbox} /> Option goodies
          <div>Cookies: </div>
          <Field name="cookies" value="abc" type="checkbox" as={Checkbox} />
          <Field name="cookies" value="123" type="checkbox" as={Checkbox} />
          <Field name="cookies" value="jkl" type="checkbox" as={Checkbox} />
          <div>Yogurt</div>
            <Field name="yogurt" value="apple" type="radio" as={Radio} />
            <Field name="yogurt" value="pine apple" type="radio" as={Radio} />
            <Field name="yogurt" value="banana" type="radio" as={Radio} />
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