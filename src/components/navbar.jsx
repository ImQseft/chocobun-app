import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Fragment } from "react";

const bar = {
  zIndex: 5
};

class NavBar extends React.Component {
  render() {
    return (
      <Fragment>
        <AppBar style={bar} position="fixed" color="primary">
          <Toolbar>
            <Typography variant="h6" color="inherit">
              Chocobun
            </Typography>
          </Toolbar>
        </AppBar>
        <Toolbar />
      </Fragment>
    );
  }
}

export default NavBar;
