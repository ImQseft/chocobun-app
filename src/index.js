import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import brown from "@material-ui/core/colors/brown";

const theme = createMuiTheme({
  typography: {
    useNextVariants: true
  },
  palette: {
    primary: {
      main: brown[500]
    },
    background: "#ffebcd"
  }
});

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
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
