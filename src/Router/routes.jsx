import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Forgot from "../pages/Forgot";
import Courses from "../pages/Courses.jsx";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: "esta vista no es, fueraaaa!",
  },  
  {
    path: "/login",
    element: <Login />,
    errorElement: "ERRORRR!",
  },
  {
    path: "/signup",
    element: <Signup />,
    errorElement: "ERRORRR!",
  },
  {
    path: "/forgot",
    element: <Forgot />,
    errorElement: "ERRORRR!",
  },
  {
    path:"/home",
    element: <Login/>,
    errorElement:"ERRORRR!"
  },
  {
    path:"/courses",
    element: <Courses/>,
    errorElement: "ERRORRR!",
  }
]);



