import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import { Root } from "./routes";
import MyProvider from "./context/authTypeContext";
import { Provider } from "react-redux";
import { theme } from "./theme";
import "./index.css";
import { store } from "./store";
import withAuth from "./lib/withAuth";
import liveLocation from "./lib/liveLocation";
// import liveLocation from "/lib/liveLocation";

ReactDOM.render(
  <Provider store={store}>
    <MyProvider>
      <ThemeProvider theme={theme}>
        <Root />
      </ThemeProvider>
    </MyProvider>
  </Provider>,
  document.getElementById("root")
);
