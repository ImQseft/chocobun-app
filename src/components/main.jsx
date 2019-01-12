import React from "react";
import NavBar from "./navbar";
import BotNav from "./botnav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Transmute from "./stage-1/transmute";
import Courses from "./stage-1/courses";
import PageError from "./extra-pages/pageerror";
import { Fragment } from "react";

class Main extends React.Component {
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <Fragment>
          <div className="fixedScreen noselect">
            <NavBar />
            <Switch>
              <Route exact path="/" component={Transmute} />
              <Route path="/courses" component={Courses} />
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
