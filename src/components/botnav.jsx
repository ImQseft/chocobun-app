import React from "react";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import TransmuteIcon from "@material-ui/icons/Assignment";
import ComputeIcon from "@material-ui/icons/Class";
import { withRouter } from "react-router-dom";
import { Fragment } from "react";

class BotNav extends React.Component {
  state = {
    vaule: 0,
    test: true
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
    return (
      <Fragment>
        <BottomNavigation value={this.state.vaule} showLabels>
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

export default withRouter(BotNav);
