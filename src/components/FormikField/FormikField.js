import React from "react";
import { Formik, Field, Form, useField, FieldArray } from "formik";
import {
  TextField,
  Button,
  Checkbox,
  Radio,
  FormControlLabel,
  Select,
  MenuItem,
  Typography
} from "@material-ui/core";
import * as yup from "yup";

const validationSchema = yup.object({
  middleName: yup
    .string()
    .required()
    .max(10)
});

const MyRadio = ({ label, ...props }) => {
  const [field] = useField(props);
  return <FormControlLabel {...field} control={<Radio />} />;
};

const MyTextField = ({ placeholder, ...props }) => {
  const [field, meta] = useField(props);
  const errorText = meta.error && meta.touched ? meta.error : "";
  return (
    <TextField
      placeholder={placeholder}
      {...field}
      helperText={errorText}
      error={!!errorText}
    />
  );
};

const FormikField = () => (
  <>
    <center>
      <Formik
        initialValues={{
          middleName: "",
          firstName: "",
          lastName: "",
          isTall: false,
          cookies: [],
          yogurt: "",
          pets: [{ type: "dog", name: "eka", id: "" + Math.random() }]
        }}
        validationSchema={validationSchema}
        // validate={values => {
        //   const errors = {}

        //   if(values.middleName.includes("bob")) {
        //     errors.middleName = "no bob"
        //   }

        //   return errors
        // }}
        onSubmit={(data, { setSubmitting }) => {
          setSubmitting(true);
          // make aynsc call
          alert(JSON.stringify(data, null, 2));
          console.log("Submit: ", data);
          setSubmitting(false);
        }}
      >
        {({ values, errors, isSubmitting }) => (
          <Form>
            <MyTextField placeholder="Middle name" name="middleName" />
            <div>
              <Field
                placeholder="First name"
                name="firstName"
                type="input"
                as={TextField}
              />
            </div>
            <div>
              <Field
                placeholder="Last name"
                name="lastName"
                type="input"
                as={TextField}
              />
            </div>
            <br />
            <Typography>Option goodies</Typography>
            <Field name="isTall" type="checkbox" as={Checkbox} />
            <Typography>Cookies</Typography>
            <Field name="cookies" value="abc" type="checkbox" as={Checkbox} />
            <Field name="cookies" value="123" type="checkbox" as={Checkbox} />
            <Field name="cookies" value="jkl" type="checkbox" as={Checkbox} />
            <Typography>Yogurt</Typography>
            <Field name="yogurt" value="apple" type="radio" as={Radio} />
            <Field name="yogurt" value="pine apple" type="radio" as={Radio} />
            <Field name="yogurt" value="banana" type="radio" as={Radio} />
            <MyRadio
              name="yogurt"
              type="radio"
              value="blueberry"
              label="Blueberry"
            />
            <div>
              <FieldArray name="pets">
                {arrayHelpers => (
                  <div>
                    {values.pets.map((pet, index) => {
                      return (
                        <div key={pet.id}>
                          <MyTextField
                            placeholder="pet name"
                            name={`pets.${index}.name`}
                          />
                          <Field
                            name={`pets.${index}.type`}
                            type="select"
                            as={Select}
                          >
                            <MenuItem value="dog">Dog</MenuItem>
                            <MenuItem value="bird">Bird</MenuItem>
                            <MenuItem value="frog">Frog</MenuItem>
                          </Field>
                        </div>
                      );
                    })}
                  </div>
                )}
              </FieldArray>
            </div>
            <br />
            <div>
              <Button
                variant="contained"
                color="primary"
                disabled={isSubmitting}
                type="submit"
              >
                Submit
              </Button>
            </div>
            <pre>
              {JSON.stringify(
                {
                  values: values,
                  errors: errors,
                  cookiesLength: values.cookies.length
                },
                null,
                2
              )}
            </pre>
          </Form>
        )}
      </Formik>
    </center>
  </>
);

export default FormikField;
