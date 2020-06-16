import React from "react";
// MUI
import { makeStyles } from "@material-ui/core/styles";
// component
import Header from "../Header";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing(10)
  }
}));

export default function Layout({ children }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header />
      {children}
    </div>
  );
}
