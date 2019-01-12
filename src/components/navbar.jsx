import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Fragment } from "react";
import ClearMenu from "./clearmenu";

const bar = {
  zIndex: 5
};

class NavBar extends React.Component {

  handleReset = () => {
    this.props.handleReset()
  }

  render() {
    return (
      <Fragment>
        <AppBar style={bar} position="fixed" color="primary">
          <Toolbar>
            <Typography variant="h6" color="inherit">
              Chocobun
            </Typography>
            <ClearMenu resetState={this.handleReset} />
          </Toolbar>
        </AppBar>
        <Toolbar />
      </Fragment>
    );
  }
}

export default NavBar;
