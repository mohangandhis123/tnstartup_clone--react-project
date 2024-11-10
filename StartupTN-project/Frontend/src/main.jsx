import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Header from "./Components/Header.jsx";
import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Header />
    <App />
  </StrictMode>
);
