import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import {
  FormikSignIn,
  FormikProject,
  FormikTextField,
  FormikField,
  LandingPage,
  Navigation
} from "./components";

function App() {
  return (
    <>
      <Router>
        <Navigation />
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/formik-project" component={FormikProject} />
          <Route path="/formik-field" component={FormikField} />
          <Route path="/formik-textfield" component={FormikTextField} />
          <Route path="/formik-signin" component={FormikSignIn} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
