import React from "react";
import "../styles/globals.css";
import { ContextProvider } from "./providers/AppContext";
import AppProvider from "./providers/AppProvider";
import router from "./pages/router";
import { RouterProvider } from "react-router-dom";

function App() {
  return (
    <React.StrictMode>
      <ContextProvider>
        <AppProvider>
          <RouterProvider router={router} />
        </AppProvider>
      </ContextProvider>
    </React.StrictMode>
  );
}

export default App;
