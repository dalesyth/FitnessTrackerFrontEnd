import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
// import Root from "./routes/root";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Activities from "./Components/Activities";
import Routines from "./Components/Routines";
import MyRoutines from "./Components/MyRoutines";
import ErrorPage from "./Components/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/Login",
        element: <Login />,
      },
      {
        path: "/Activities",
        element: <Activities />,
      },
      {
        path: "/MyRoutines",
        element: <MyRoutines />,
      },
      {
        path: "/Routines",
        element: <Routines />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
