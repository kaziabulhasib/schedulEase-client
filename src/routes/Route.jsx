import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../components/login/Login";
import Dashboard from "../components/dashbaord/Dashboard";
import Register from "../register/Register";
import Availity from "../components/availity/Availity";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,

    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/availity",
        element: <Availity />,
      },
    ],
  },
]);
