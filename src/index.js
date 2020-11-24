import React from "react";
import ReactDOM from "react-dom";
import App from "./components/ToDoApp";
import ToDosProvider from "./context";

ReactDOM.render(
  <React.StrictMode>
    <ToDosProvider>
      <App />
    </ToDosProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
