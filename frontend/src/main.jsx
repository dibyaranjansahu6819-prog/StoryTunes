import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import App from "./App";

import { MusicProvider } from "./context/MusicContext";
import { AuthProvider } from "./context/AuthContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <MusicProvider>
        <App />
      </MusicProvider>
    </AuthProvider>
  </React.StrictMode>
);