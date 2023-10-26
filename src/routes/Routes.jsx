import { createBrowserRouter } from "react-router-dom";
import Root from "../mainLayout/Root";
import Home from "../pages/home/home/Home";
import Login from "../pages/login/Login";
import SignUp from "../pages/signUp/SignUp";
import BookServices from "../pages/bookServices/BookServices";
import Bookings from "../pages/bookings/Bookings";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
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
        path: "/bookService/:id",
        element: <BookServices />,
        loader: ({ params }) =>
          fetch(`http://127.0.0.1:5000/services/${params.id}`),
      },
      {
        path: "/bookings",
        element: (
          <PrivateRoutes>
            <Bookings />
          </PrivateRoutes>
        ),
      },
    ],
  },
]);

export default router;
