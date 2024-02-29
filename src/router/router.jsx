import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Share/Login/Login";
import SignUp from "../Share/SignUp/SignUp";
import Dashboard from "../Layout/Dashboard/Dashboard";
import BookingList from "../Pages/Dashboard/BookingList/BookingList";
import Service from "../Pages/Home/Service/Service";
import BookIng from "../Pages/Dashboard/BookIng/BookIng";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signUp",
        element: <SignUp />,
      },
      {
        // path: "/services",
        // element: <Service></Service>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "booking",
        element: <BookIng />,
      },
      {
        path: "bookingList",
        element: <BookingList />,
      },
    ],
  },
]);
export default router;
