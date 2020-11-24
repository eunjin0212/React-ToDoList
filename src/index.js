import React from "react";
import ReactDOM from "react-dom";
import App from "./components/ToDoApp";
import ToDosProvider from "./context";

ReactDOM.render(
  <ToDosProvider>
    <App />
  </ToDosProvider>,
  document.getElementById("root")
);
