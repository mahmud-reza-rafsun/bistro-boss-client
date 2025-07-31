import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import OurShop from "../Pages/OurShop/OurShop";
import ContactForm from "../Pages/Contact/ContactForm";
import Login from "../Pages/Authentication/Login/Login";
import Register from "../Pages/Authentication/Register/Register";
import PrivetRouter from "./PrivetRouter";
import Dashboard from "../Layout/Dashboard";
import Cart from "../Pages/Dashboard/Cart/Cart";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import AddItems from "../Pages/Dashboard/AddItems/AddItems";
import AdminRoute from "./AdminRoute";
import ManageItems from "../Pages/Dashboard/ManageItems/ManageItems";
import UpdateItems from "../Pages/Dashboard/UpdateItems/UpdateItems";
import Payment from "../Pages/Dashboard/Payment/Payment";
import PaymentHistory from "../Pages/Dashboard/PaymentHistory/PaymentHistory";
import UserHome from "../Pages/Dashboard/UserHome/UserHome";
import AdminHome from "../Pages/Dashboard/AdminHome/AdminHome";

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
        element:
          <Menu />

      },
      {
        path: "/our-shop/:category",
        element:
          <OurShop />
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
  {
    path: '/dashboard',
    element: <PrivetRouter>
      <Dashboard />
    </PrivetRouter>,
    children: [
      {
        path: '/dashboard/user-home',
        element: <UserHome />
      },
      {
        path: '/dashboard/cart',
        element: <Cart />
      },
      {
        path: '/dashboard/payment',
        element: <Payment />
      },
      {
        path: '/dashboard/payment-history',
        element: <PaymentHistory />
      },
      // admin dashboard
      {
        path: '/dashboard/admin-home',
        element: <AdminHome />
      },
      {
        path: '/dashboard/users',
        element: <AdminRoute>
          <AllUsers />
        </AdminRoute>
      },
      {
        path: '/dashboard/add-items',
        element: <AdminRoute>
          <AddItems />
        </AdminRoute>
      },
      {
        path: '/dashboard/manage-items',
        element: <AdminRoute>
          <ManageItems />
        </AdminRoute>
      },
      {
        path: '/dashboard/update-items/:id',
        element: <AdminRoute>
          <UpdateItems />
        </AdminRoute>,
        loader: ({ params }) => fetch(`https://bistro-boss-server-de.vercel.app/menu/${params.id}`)
      }
    ]
  }
]);

export default router;
