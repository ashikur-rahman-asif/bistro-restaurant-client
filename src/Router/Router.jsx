import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../components/pages/Home/Home/Home";
import Menu from "../components/pages/Menu/Menu";
import Order from "../components/pages/Order/Order";
import Login from "../components/pages/Login/Login";
import SignUp from "../components/pages/SignUp/SignUp";
import Dashboard from "../Layout/Dashboard";
import Mycart from "../components/pages/Dashboard/Mycart/Mycart";
import PrivateRoute from "./PrivateRoute";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
      },
      {
        path: "order/:category",
        element: <Order />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
    ],
  },
  {
    path: "dashboard",
    element: <PrivateRoute><Dashboard /></PrivateRoute>,
    children: [
      {
        path: 'mycart', 
        element: <Mycart/>
      }
    ]
  },
]);
export default router;
