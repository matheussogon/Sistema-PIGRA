import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Account from "./pages/Account.jsx";
import ViewBiometrics from "./pages/ViewBiometrics.jsx";
import AddBiometrics from "./pages/AddBiometrics.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/account",
    element: <Account />,
  },
  {
    path: "/view-biometrics",
    element: <ViewBiometrics />,
  },
  {
    path: "add-biometrics",
    element: <AddBiometrics />,
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
