import { createBrowserRouter } from "react-router-dom";
import Home from "../../Pages/Home/Home";
import Profile from "../../Pages/Profile/Profile";
import Login from "../Login/Login";
import Register from "../Register/Register";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>,
    },
    {
        path:"profile",
        element: <Profile/>
    },
    {
        path:"login",
        element: <Login/>
    },
    {
        path:"register",
        element: <Register/>
    }
  ]);