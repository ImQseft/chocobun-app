import React from "react";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import IconButton from "@material-ui/core/IconButton";
import MoreIcon from "@material-ui/icons/MoreVert";
import { Fragment } from "react";
import ErrorSnackBar from "./extra-pages/errorsnackbar";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";

const threeDots = {
  position: "fixed",
  right: 5
};

class ClearMenu extends React.Component {
  state = {
    anchorEl: null,
    errorOpen: false,
    errorMessage: "",
    openPrompt: false
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  handleDialogOpen = () => {
    this.handleClose();
    this.setState({ openPrompt: true });
  };

  handleDialogClose = () => {
    this.setState({ openPrompt: false });
  };

  handleClear = () => {
    this.props.resetState();
    localStorage.clear();
    this.setState({
      errorOpen: true,
      errorMessage: "Successfully cleared all data."
    });
    this.handleDialogClose();
  };

  handleErrorClosed = () => {
    this.setState({ errorOpen: false });
  };

  render() {
    const { anchorEl } = this.state;
    return (
      <Fragment>
        <IconButton
          onClick={this.handleClick}
          style={threeDots}
          color="secondary"
        >
          <MoreIcon />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          <MenuItem onClick={this.handleDialogOpen}>Clear All Data</MenuItem>
        </Menu>
        <ErrorSnackBar
          isOpen={this.state.errorOpen}
          isClosed={this.handleErrorClosed}
          errorMessage={this.state.errorMessage}
        />
        <Dialog
          fullWidth={true}
          open={this.state.openPrompt}
          onClose={this.handleDialogClose}
        >
          <DialogTitle>Clear all data?</DialogTitle>
          <DialogContent>
            <DialogContentText>
              This will delete all courses, syllabi, and scores saved on this
              device. Are you sure you want to continue?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleDialogClose} color="primary">
              No
            </Button>
            <Button onClick={this.handleClear} color="primary">
              Yes
            </Button>
          </DialogActions>
        </Dialog>
      </Fragment>
    );
  }
}

export default ClearMenu;
