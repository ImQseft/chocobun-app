import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import ChocobunTheme from "./chocobuntheme.json";
import { CssBaseline } from "@material-ui/core";
import * as serviceWorker from "./serviceWorker";

const theme = createMuiTheme(ChocobunTheme);

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <CssBaseline />
    <App />
  </MuiThemeProvider>,
  document.getElementById("root")
);

serviceWorker.register();
