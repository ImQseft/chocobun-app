import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import TransmuteIcon from "@material-ui/icons/Assignment";
import ComputeIcon from "@material-ui/icons/Class";
import { withRouter } from "react-router-dom";
import { Fragment } from "react";

const styles = {
  root: {
    //
  }
};

class BotNav extends React.Component {
  state = {
    vaule: 0
  };

  navToTransmute = () => {
    this.props.history.push("/");
    this.setState({ vaule: 0 });
  };

  navToCourses = () => {
    this.props.history.push("/courses");
    this.setState({ vaule: 1 });
  };

  render() {
    const { classes } = this.props;

      return (
        <Fragment>
          <BottomNavigation
            value={this.state.vaule}
            showLabels
            className={classes.root}
          >
            <BottomNavigationAction
              onClick={this.navToTransmute}
              label="Transmute"
              icon={<TransmuteIcon />}
            />
            <BottomNavigationAction
              onClick={this.navToCourses}
              label="Courses"
              icon={<ComputeIcon />}
            />
          </BottomNavigation>
        </Fragment>
      );
  }
}

BotNav.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withRouter(withStyles(styles)(BotNav));
