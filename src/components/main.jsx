import React from "react";
import NavBar from "./navbar";
import BotNav from "./botnav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Transmute from "./stage-1/transmute";
import Courses from "./stage-1/courses";
import PageError from "./stage-1/pageerror";
import { Fragment } from "react";

class Main extends React.Component {
  state = {
    //
  };

  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <Fragment>
          <div className="fixedScreen noselect">
            <NavBar />
            <Switch>
              <Route
                exact
                path="/"
                render={props => (
                  <Transmute {...props} onRef={ref => (this.transmute = ref)} />
                )}
              />
              <Route
                path="/courses"
                render={props => (
                  <Courses {...props} onRef={ref => (this.courses = ref)} />
                )}
              />
              <Route component={PageError} />
            </Switch>
          </div>
          <div className="fixedScreen noselect botnav">
            <BotNav />
          </div>
        </Fragment>
      </Router>
    );
  }
}

export default Main;
