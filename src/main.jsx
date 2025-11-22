import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { getAssetPath } from "./utils/assetPath";

// Set CSS custom property for background image
document.documentElement.style.setProperty(
  "--highlight-bg-url",
  `url(${getAssetPath("/highlight-bg.png")})`
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
