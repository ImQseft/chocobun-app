import React from "react";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import IconButton from "@material-ui/core/IconButton";
import MoreIcon from "@material-ui/icons/MoreVert";
import { Fragment } from "react";
import ErrorSnackBar from "./extra-pages/errorsnackbar";

const threeDots = {
  right: 5,
  top: 5,
  position: "fixed",
  zIndex: 10
};

class ClearMenu extends React.Component {
  state = {
    anchorEl: null,
    errorOpen: false,
    errorMessage: ""
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  handleClear = () => {
    this.props.resetState();
    localStorage.clear();
    this.handleClose();
    this.setState({
      errorOpen: true,
      errorMessage: "Successfully cleared all data."
    });
  };

  handleErrorClosed = () => {
    this.setState({ errorOpen: false });
  };

  render() {
    const { anchorEl } = this.state;
    return (
      <Fragment>
        <IconButton
          aria-owns={anchorEl ? "simple-menu" : undefined}
          aria-haspopup="true"
          onClick={this.handleClick}
          style={threeDots}
          color="secondary"
        >
          <MoreIcon />
        </IconButton>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          <MenuItem onClick={this.handleClear}>Clear All Data</MenuItem>
        </Menu>
        <ErrorSnackBar
          isOpen={this.state.errorOpen}
          isClosed={this.handleErrorClosed}
          errorMessage={this.state.errorMessage}
        />
      </Fragment>
    );
  }
}

export default ClearMenu;
