import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import OurShop from "../Pages/OurShop/OurShop";
import ContactForm from "../Pages/Contact/ContactForm";
import Login from "../Pages/Authentication/Login/Login";
import Register from "../Pages/Authentication/Register/Register";
import PrivetRouter from "./PrivetRouter";

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
        path: "/menu",
        element: <PrivetRouter>
          <Menu />
        </PrivetRouter>,
      },
      {
        path: "/our-shop/:category",
        element: <PrivetRouter>
          <OurShop />
        </PrivetRouter>,
      },
      {
        path: "/contact-us",
        element: <ContactForm />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: '/registration',
        element: <Register />
      },
    ],
  },
]);

export default router;
