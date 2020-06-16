import React from "react";
// MUI
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing(10),
    marginRight: theme.spacing(2)
  }
}));

export default function Header() {
  return <div>Header</div>;
}
