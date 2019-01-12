import React from "react";
import NavBar from "./navbar";
import BotNav from "./botnav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Transmute from "./stage-1/transmute";
import Courses from "./stage-1/courses";
import PageError from "./extra-pages/pageerror";
import { Fragment } from "react";

class Main extends React.Component {
  state = {
    resetState: false
  };

  handleReset = () => {
    this.setState({ resetState: true });
  };

  handleDoneClear = () => {
    this.setState({ resetState: false });
  };

  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <Fragment>
          <div className="noselect">
            <NavBar handleReset={this.handleReset} />
            <Switch>
              <Route
                exact
                path="/"
                render={props => (
                  <Transmute
                    {...props}
                    reset={this.state.resetState}
                    doneClear={this.handleDoneClear}
                  />
                )}
              />
              <Route
                path="/courses"
                render={props => (
                  <Courses
                    {...props}
                    reset={this.state.resetState}
                    doneClear={this.handleDoneClear}
                  />
                )}
              />
              <Route component={PageError} />
            </Switch>
          </div>
          <div className="noselect botnav">
            <BotNav />
          </div>
        </Fragment>
      </Router>
    );
  }
}

export default Main;
