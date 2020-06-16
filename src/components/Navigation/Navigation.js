import React from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";
// MUI
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import { makeStyles } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { routes } from "./routes";

const useStyles = makeStyles(theme => ({
  list: {
    width: 250
  },
  fullList: {
    width: "auto"
  },
  menu: {
    textAlign: "right",
    paddingBottom: "80px"
  },
  fab: {
    position: "absolute",
    top: theme.spacing(2),
    right: theme.spacing(2)
  }
}));

export default function Navigation() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false
  });

  const toggleDrawer = (anchor, open) => event => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = anchor => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom"
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {routes.map(route => (
          <ListItem component={Link} to={route.path} button key={route.id}>
            <ListItemText primary={route.name} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div className={classes.menu}>
      <React.Fragment key={"top"}>
        {/* <Button
          onClick={toggleDrawer("top", true)}
          variant="contained"
          color="secondary"
        >
          <span role="img" aria-label="menu" style={{ marginRight: "10px" }}>
            🔎
          </span>
          {"Menu"}
        </Button> */}
        <Fab
          className={classes.fab}
          color="secondary"
          aria-label="add"
          onClick={toggleDrawer("top", true)}
        >
          <span role="img" aria-label="menu">
            🔎
          </span>
        </Fab>
        <SwipeableDrawer
          anchor={"top"}
          open={state["top"]}
          onClose={toggleDrawer("top", false)}
          onOpen={toggleDrawer("top", true)}
        >
          {list("top")}
        </SwipeableDrawer>
      </React.Fragment>
    </div>
  );
}
