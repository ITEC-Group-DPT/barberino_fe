import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import MainRoutes from "routes/main";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <MainRoutes />
  </React.StrictMode>
);
