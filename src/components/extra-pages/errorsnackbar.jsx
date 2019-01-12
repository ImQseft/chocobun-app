import React from "react";
import Snackbar from "@material-ui/core/Snackbar";

class ErrorSnackBar extends React.Component {
  render() {
    return (
      <div>
        <Snackbar
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
          open={this.props.isOpen}
          onClose={this.props.isClosed}
          autoHideDuration={1000}
          message={this.props.errorMessage}
        />
      </div>
    );
  }
}

export default ErrorSnackBar;
