import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import LanguageContextProvider from "./context/LanguageContext.jsx";
import AuthContextProvider from "./context/AuthContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <AuthContextProvider>
        <LanguageContextProvider>
          <App />
        </LanguageContextProvider>
      </AuthContextProvider>
    </Router>
  </React.StrictMode>,
);
