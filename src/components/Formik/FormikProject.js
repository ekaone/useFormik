import React, { useEffect, useState } from "react";
import { Formik, Field, Form } from "formik";
import * as yup from "yup";
import shorid from "shortid";
// import { getProjects, addProject } from './Controller'
import { projectsData } from "./mockData";

import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";

const validationSchema = yup.object({
  projectId: yup.string().required(),
  projectName: yup.string().required("Need Project Name"),
  projectValue: yup.string().required("Need Project Value"),
  projectDuration: yup.string().required("Duration is required!")
});

const useStyles = makeStyles(theme => ({
  formControl: {
    minWidth: 160
  }
}));

export default function FormikProject() {
  const classes = useStyles();
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(projectsData);
  }, []);

  // const handleSubmit = event => {
  //   event.preventDefault();

  //   setProjects([...values, projectsData]);
  // };

  console.log(projects);

  return (
    <>
      <br />
      <Formik
        initialValues={{
          projectId: shorid.generate(),
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

          // make aynsc call
          // console.log('Submit: ', values)
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
            <Field
              as={TextField}
              id="peoject-id"
              label="Project ID"
              type="text"
              name="projectId"
              onChange={handleChange}
              value={values.projectId}
              variant="outlined"
              disabled
            />
            <br />
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
                helperText={touched.projectName ? errors.projectName : ""}
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
                helperText={touched.projectValue ? errors.projectValue : ""}
                error={Boolean(errors.projectValue)}
              />
            </div>
            <div style={{ paddingTop: 15 }}>
              <Field
                error={Boolean(
                  errors.projectDuration && touched.projectDuration
                )}
                as={Select}
                displayEmpty
                name="projectDuration"
                type="select"
                variant="outlined"
              >
                <MenuItem value="">
                  <em>Duration</em>
                </MenuItem>
                <MenuItem value="1">1</MenuItem>
                <MenuItem value="2">2</MenuItem>
                <MenuItem value="3">3</MenuItem>
              </Field>
              <FormHelperText>{errors.projectDuration}</FormHelperText>
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
            <pre>
              {JSON.stringify(
                {
                  projects: projects,
                  values: values,
                  test:
                    values.projectDuration.length === 0
                      ? "empty"
                      : values.projectDuration
                },
                null,
                2
              )}
            </pre>
          </Form>
        )}
      </Formik>
    </>
  );
}
