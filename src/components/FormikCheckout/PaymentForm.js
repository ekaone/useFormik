import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";
// Formik
import { Formik, Field, Form } from "formik";
// YUP
import * as yup from "yup";
// MUI
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

const validationSchema = yup.object({
  cardName: yup.string().required(),
  cardNumber: yup.string().required(),
  expDate: yup.string().required(),
  cvv: yup.string().required()
});

export default function PaymentForm() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Payment method
      </Typography>
      <Grid container spacing={3}>
        <Formik
          initialValues={{
            cardName: "",
            cardNumber: "",
            expDate: "",
            cvv: "",
            saveCard: []
          }}
          validationSchema={validationSchema}
          // onSubmit={(values, { setSubmitting }) => {
          //   setSubmitting(true);

          //   console.log("Submit: ", values);
          //   setSubmitting(false);
          // }}
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
              <Grid item xs={12} md={6}>
                <TextField
                  onChange={handleChange}
                  value={values.cardName}
                  required
                  id="cardName"
                  name="cardName"
                  label="Name on card"
                  fullWidth
                  autoComplete="cc-name"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  onChange={handleChange}
                  value={values.cardNumber}
                  required
                  id="cardNumber"
                  name="cardNumber"
                  label="Card number"
                  fullWidth
                  autoComplete="cc-number"
                  error={Boolean(errors.cardNumber)}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  onChange={handleChange}
                  value={values.expDate}
                  required
                  id="expDate"
                  name="expDate"
                  label="Expiry date"
                  fullWidth
                  autoComplete="cc-exp"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  onChange={handleChange}
                  value={values.cvv}
                  required
                  id="cvv"
                  name="cvv"
                  label="CVV"
                  helperText="Last three digits on signature strip"
                  fullWidth
                  autoComplete="cc-csc"
                  error={Boolean(errors.cvv)}
                />
              </Grid>
              <Grid item xs={12}>
                <Field name="saveCard" value="yes" as={Checkbox} />
                <Typography display="inline">
                  Remember credit card details for next time
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <SyntaxHighlighter language="json" style={dark}>
                  {JSON.stringify(values, null, 2)}
                </SyntaxHighlighter>
              </Grid>
            </>
          )}
        </Formik>
      </Grid>
    </React.Fragment>
  );
}
