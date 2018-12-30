import React, { Component } from "react";
import "./App.css";
import Main from "./components/main";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Main />
      </div>
    );
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
