import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import ChocobunTheme from "./chocobuntheme.json";
import { CssBaseline } from "@material-ui/core";

const theme = createMuiTheme(ChocobunTheme);

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <CssBaseline />
    <App />
  </MuiThemeProvider>,
  document.getElementById("root")
);

if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("./serWork.js")
    .then(function(registration) {
      console.log("Registered:", registration);
    })
    .catch(function(error) {
      console.log("Registration failed: ", error);
    });
}
