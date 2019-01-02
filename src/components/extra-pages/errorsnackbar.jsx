import React from "react";
import Snackbar from "@material-ui/core/Snackbar";

class ErrorSnackBar extends React.Component {
  state = {
    //
  };

  render() {
    return (
      <div>
        <Snackbar
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
          open={this.props.isOpen}
          onClose={this.props.isClosed}
          autoHideDuration={1500}
          message={this.props.errorMessage}
        />
      </div>
    );
  }
}

export default ErrorSnackBar;
