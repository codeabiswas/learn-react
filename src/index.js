import React from "react";
import ReactDOM from "react-dom/client";
// React-Bootstrap doesn't depend on a very precise version of Bootstrap, so the package does not ship with any CSS. But the stylesheet is required to use the components, and it is added below
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
