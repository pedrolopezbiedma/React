// React
import React from "react";
import ReactDOM from "react-dom/client";

// Styles
import "./index.css";

// Context
import { AuthenticationContextProvider } from "./context/AuthenticationContext";

// Components
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthenticationContextProvider>
    <App />
  </AuthenticationContextProvider>
);
