import {
    createBrowserRouter,
   
} from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../components/pages/Home/Home/Home";
import Menu from "../components/pages/Menu/Menu";
import Order from "../components/pages/Order/Order";
import Login from "../components/pages/Login/Login";
const router = createBrowserRouter([
    {
      path: "/",
        element: <MainLayout />,
        children: [
            {
                path: '/',
                    element:<Home/>
          },
          {
            path: '/menu',
            element:<Menu/>
          },
          {
            path: 'order/:category',
            element:<Order/>
          },
          {
            path: '/login',
            element:<Login/>
          }

    ],
            
  },
  
]);
  export default router