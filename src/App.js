import React, { Component } from "react";
import "./App.css";

//Import Components
import NavBar from "./components/navbar";
import FillForm from "./components/fillform";

class App extends Component {
  render() {
    return (
      (document.body.style = "background: #ffebcd"),
      (
        <div className="fixedScreen noselect">
          <NavBar />
          <FillForm />
        </div>
      )
    );
  }
}

export default App;

//Disable Zooming
window.addEventListener(
  "touchmove",
  function(event) {
    if (event.scale !== 1) {
      event.preventDefault();
    }
  },
  { passive: false }
);
