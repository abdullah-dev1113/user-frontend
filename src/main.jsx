import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
<<<<<<< HEAD
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
=======
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import DoctorContextProvider from "./context/DoctorContext.jsx";
import AdminContextProvider from "./context/AdminContext.jsx";
>>>>>>> 66cd174411b056e40124bd25c8db42fc65194bfb
import AppContextProvider from "./context/AppContext.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
<<<<<<< HEAD
    <AppContextProvider>
      <App />
    </AppContextProvider>
=======
    <AdminContextProvider>
      <DoctorContextProvider>
        <AppContextProvider>
          <App />
        </AppContextProvider>
      </DoctorContextProvider>
    </AdminContextProvider>
>>>>>>> 66cd174411b056e40124bd25c8db42fc65194bfb
  </BrowserRouter>
);
