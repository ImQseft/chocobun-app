import React, { Component } from "react";
import "./App.css";
import Main from "./components/main";
import InstallInstructions from "./components/installinstructions";

class App extends Component {
  render() {
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
    let displayApp;
    if (
      window.navigator.standalone ||
      window.matchMedia("(display-mode: standalone)").matches ||
      !isMobile
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
