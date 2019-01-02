import React from "react";
import NavBar from "./navbar";
import BotNav from "./botnav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Transmute from "./stage-1/transmute";
import Courses from "./stage-1/courses";
import PageError from "./extra-pages/pageerror";
import { Fragment } from "react";
import ErrorSnackBar from "./extra-pages/errorsnackbar";

class Main extends React.Component {
  state = {
    errorOpen: false,
    errorMessage: ""
  };

  handleSave = () => {
    this.botNav.navToTransmute();
    this.setState({
      errorOpen: true,
      errorMessage: "Changes saved!"
    });
  };

  handleErrorClosed = () => {
    this.setState({ errorOpen: false });
  };

  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <Fragment>
          <div className="fixedScreen noselect">
            <NavBar />
            <Switch>
              <Route exact path="/" component={Transmute} />
              <Route
                path="/courses"
                render={props => (
                  <Courses {...props} handleSave={this.handleSave} />
                )}
              />
              <Route component={PageError} />
            </Switch>
          </div>
          <div className="fixedScreen noselect botnav">
            <BotNav onRef={ref => (this.botNav = ref)} />
          </div>
          <ErrorSnackBar
            isOpen={this.state.errorOpen}
            isClosed={this.handleErrorClosed}
            errorMessage={this.state.errorMessage}
          />
        </Fragment>
      </Router>
    );
  }
}

export default Main;
