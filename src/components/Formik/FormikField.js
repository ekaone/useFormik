import React from 'react';
import { Formik, Field, Form, useField } from 'formik';
import { 
  TextField,
  Button,
  Checkbox,
  Radio,
  FormControlLabel  
} from '@material-ui/core'
import * as yup from "yup";


const MyRadio = ({ label, ...props }) => {
  const [field] = useField(props)
  return <FormControlLabel {...field} control={<Radio />} />
}

const MyTextField = ({ placeholder, ...props }) => {
  const [field, meta] = useField(props)
  const errorText = meta.error && meta.touched ? meta.error : ""
  return (
    <TextField 
      placeholder={placeholder}
      {...field}
      helperText={errorText}
      error={!!errorText}
    />
  )
}

const Basic = () => (
  <>
    <Formik
      initialValues={{ 
        middleName: '',
        firstName: '', 
        lastName: '',
        isTall: false,
        cookies: [],
        yogurt: ""  
      }}
      validate={values => {
        const errors = {}
        
        if(values.middleName.includes("bob")) {
          errors.middleName = "no bob"
        }

        return errors
      }}
      onSubmit={(data, { setSubmitting })=> {
        setSubmitting(true)
        // make aynsc call
        console.log('Submit: ', data)
        setSubmitting(false)
      }}
    >
      {({ values, errors, isSubmitting }) => (
        <Form>
          <MyTextField placeholder="Middle name" name="middleName" />
          <div>
          <Field
            placeholder='First name'
            name='firstName'
            type='input'
            as={TextField}
          />
          </div>
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
            <MyRadio name="yogurt" type="radio" value="blueberry" label="Blueberry" />
          <div>
            <Button disabled={isSubmitting} type='submit'>Submit</Button>
          </div>
          <pre>{JSON.stringify({
            values: values,
            errors: errors,
            cookiesLength: values.cookies.length
          }, null, 2)}</pre>
        </Form>
      )}
    </Formik>
  </>
);

export default Basic;