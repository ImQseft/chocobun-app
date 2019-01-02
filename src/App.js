import React, { Component } from "react";
import "./App.css";
import Main from "./components/main";
import InstallInstructions from "./components/installinstructions";

class App extends Component {
  render() {
    let displayApp;
    if (
      window.navigator.standalone ||
      window.matchMedia("(display-mode: standalone)").matches
    ) {
      displayApp = <Main />;
    } else displayApp = <InstallInstructions />;

    return <div className="App">{displayApp}</div>;
  }
}
export default App;

//Disable zooming to feel more native
window.addEventListener(
  "touchmove",
  function(event) {
    if (event.scale !== 1) {
      event.preventDefault();
    }
  },
  { passive: false }
);
