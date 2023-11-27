import React from "react";
import { createRoot } from "react-dom/client";
import App from "./routes/App";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Dashboard from "./routes/Dashboard";
import ErrorPage from "./routes/ErrorPage";
import Login from "./routes/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
