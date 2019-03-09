import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Root } from "./routes";
import MyProvider from "./context/authTypeContext";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";

ReactDOM.render(
  <MyProvider>
    <ThemeProvider theme={theme}>
      <Root />
    </ThemeProvider>
  </MyProvider>,
  document.getElementById("root")
);
