import React, { useState } from "react";
// Formik
import { Formik, Field, Form } from "formik";
// YUP
import * as yup from "yup";
// MUI
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import FormControl from "@material-ui/core/FormControl";

const validationSchema = yup.object({
  firstName: yup.string().required("Need First Name"),
  lastName: yup.string().required("Need Last Value"),
  addressLine1: yup.string().required("Address is required!"),
  addressLine2: yup.string().required("Second Address is required!"),
  city: yup.string().required("City is required!"),
  state: yup.string().required("State is required!"),
  zip: yup.string().required("Zip is required!"),
  country: yup.string().required("Country is required!")
});

export default function AddressForm() {
  const [address, setAddress] = useState([]);

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <Grid container spacing={3}>
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            addressLine1: "",
            addressLine2: "",
            city: "",
            state: "",
            country: "",
            saveAddress: []
          }}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting }) => {
            setSubmitting(true);
            // setAddress(previousState => {
            //   return [...previousState, values];
            // });
            // aynsc call
            console.log("Submit: ", values);
            setSubmitting(false);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting
          }) => (
            <>
              <Grid item xs={12} sm={6}>
                <TextField
                  onChange={handleChange}
                  value={values.firstName}
                  required
                  id="firstName"
                  name="firstName"
                  label="First name"
                  fullWidth
                  autoComplete="given-name"
                  error={Boolean(errors.firstName)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  onChange={handleChange}
                  value={values.lastName}
                  required
                  id="lastName"
                  name="lastName"
                  label="Last name"
                  fullWidth
                  autoComplete="given-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  onChange={handleChange}
                  value={values.addressLine1}
                  required
                  id="addressLine1"
                  name="addressLine1"
                  label="Address line 1"
                  fullWidth
                  autoComplete="shipping address-line1"
                  error={Boolean(errors.addressLine1)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  onChange={handleChange}
                  value={values.addressLine2}
                  required
                  id="address2"
                  name="addressLine2"
                  label="Address line 2"
                  fullWidth
                  autoComplete="shipping address-line1"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  onChange={handleChange}
                  value={values.city}
                  required
                  id="city"
                  name="city"
                  label="City"
                  fullWidth
                  autoComplete="shipping address-level2"
                  error={Boolean(errors.city)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  onChange={handleChange}
                  value={values.state}
                  id="state"
                  name="state"
                  label="State/Province/Region"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  onChange={handleChange}
                  value={values.zip}
                  required
                  id="zip"
                  name="zip"
                  label="Zip / Postal code"
                  fullWidth
                  autoComplete="shipping postal-code"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  onChange={handleChange}
                  value={values.country}
                  required
                  id="country"
                  name="country"
                  label="Country"
                  fullWidth
                  autoComplete="shipping country"
                  error={Boolean(errors.country)}
                />
              </Grid>
              <Grid item xs={12}>
                <Field name="saveAddress" value="yes" as={Checkbox} />
                <Typography display="inline">
                  Use this address for Payment details
                </Typography>
              </Grid>
              <br />
              <pre>{JSON.stringify(values, null, 2)}</pre>
            </>
          )}
        </Formik>
      </Grid>
    </React.Fragment>
  );
}
