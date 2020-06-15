import React, { useEffect, useState } from "react";
import { Formik, Field, Form } from "formik";
import * as yup from "yup";
import shorid from "shortid";
import { projectsData } from "./mockData";
import ViewOutput from "./ViewOutput";

import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const validationSchema = yup.object({
  projectName: yup.string().required("Need Project Name"),
  projectValue: yup.string().required("Need Project Value"),
  projectDuration: yup.string().required("Duration is required!")
});

const useStyles = makeStyles(theme => ({
  formControl: {
    minWidth: 400
  },
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));

export default function FormikProject() {
  const classes = useStyles();
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(projectsData);
  }, []);

  console.log(projects);

  return (
    <>
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Paper className={classes.paper}>
              <Formik
                initialValues={{
                  projectName: "",
                  projectValue: "",
                  projectDuration: ""
                }}
                validationSchema={validationSchema}
                onSubmit={(values, { setSubmitting }) => {
                  setSubmitting(true);
                  setProjects(previousState => {
                    return [...previousState, values];
                  });
                  // aynsc call
                  // console.log("Submit: ", values);
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
                  <Form onSubmit={handleSubmit}>
                    <div style={{ paddingTop: 15 }}>
                      <Field
                        as={TextField}
                        id="project-name"
                        label="Project Name"
                        type="text"
                        name="projectName"
                        onChange={handleChange}
                        value={values.projectName}
                        variant="outlined"
                        helperText={
                          touched.projectName ? errors.projectName : ""
                        }
                        error={Boolean(errors.projectName)}
                      />
                    </div>
                    <div style={{ paddingTop: 15 }}>
                      <Field
                        as={TextField}
                        id="project-value"
                        label="Project Value"
                        type="number"
                        name="projectValue"
                        onChange={handleChange}
                        value={values.projectValue}
                        variant="outlined"
                        helperText={
                          touched.projectValue ? errors.projectValue : ""
                        }
                        error={Boolean(errors.projectValue)}
                      />
                    </div>
                    <div
                      style={{
                        paddingTop: 15
                      }}
                    >
                      <Field
                        as={Select}
                        displayEmpty
                        name="projectDuration"
                        type="select"
                        variant="outlined"
                        error={Boolean(
                          errors.projectDuration && touched.projectDuration
                        )}
                      >
                        <MenuItem value="">
                          <em>Duration</em>
                        </MenuItem>
                        <MenuItem value="1">1</MenuItem>
                        <MenuItem value="2">2</MenuItem>
                        <MenuItem value="3">3</MenuItem>
                      </Field>
                      <FormHelperText
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          textAlign: "center"
                        }}
                      >
                        {errors.projectDuration}
                      </FormHelperText>
                    </div>
                    <br />
                    <Button
                      variant="contained"
                      color="primary"
                      disabled={isSubmitting}
                      type="submit"
                    >
                      Save
                    </Button>
                  </Form>
                )}
              </Formik>
            </Paper>
          </Grid>
          <Grid item xs={6} sm={6}>
            <ViewOutput rows={projects} />
          </Grid>
        </Grid>
      </div>
    </>
  );
}
