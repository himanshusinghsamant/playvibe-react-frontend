import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { store } from "./store/store";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { router } from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
      <StrictMode>
        <RouterProvider router={router}>
        <App />
        </RouterProvider>
      </StrictMode>
  </Provider>
);
