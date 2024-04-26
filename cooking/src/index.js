// React
import React from "react";
import ReactDOM from "react-dom/client";

// Styles
import "./index.css";

// Context
import { ThemeContextProvider } from "./context/ThemeContext";

// Component
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <ThemeContextProvider>
    <App />
  </ThemeContextProvider>
);
