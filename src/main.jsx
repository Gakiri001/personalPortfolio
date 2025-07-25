import "./index.css";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import React from "react";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
