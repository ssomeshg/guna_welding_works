import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import Topbar from "./components/Topbar.jsx";
import CategoryView from "./components/CategoryView.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    {/* TopBar */}
    <Topbar />

    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/door" element={<CategoryView />} />
    </Routes>
  </BrowserRouter>
);
