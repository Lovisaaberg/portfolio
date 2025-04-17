import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import { App } from "./App.jsx"

console.log(
  "%cHey you! 👋 Let's connect on LinkedIn! https://www.linkedin.com/in/lovisaaberg/",
  "color: #000000; font-size: 16px; font-weight: bold; padding: 10px;"
)

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
)
