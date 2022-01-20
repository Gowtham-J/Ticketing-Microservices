import { Navigate, useRoutes } from "react-router-dom";
// layouts
import DashboardLayout from "./layouts/dashboard";
import LogoOnlyLayout from "./layouts/LogoOnlyLayout";
//
import Login from "./pages/Login";
import Register from "./pages/Register";
import DashboardApp from "./pages/DashboardApp";
import Products from "./pages/Products";
import Blog from "./pages/Blog";
import User from "./pages/User";
import NotFound from "./pages/Page404";
import Tickets from "./pages/Ticket";
import Regards from "./pages/Regards";
import OrderPlace from "./pages/OrderPlace";
import Payment from "./pages/Payment";
import OrderRegards from "./pages/OrderRegards";
import Orders from "./pages/orders";

// ----------------------------------------------------------------------

export default function Router({ pageprops, currentUser }) {
  return useRoutes([
    {
      path: "/dashboard",
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/dashboard/app" replace /> },
        { path: "app", element: <DashboardApp /> },
        { path: "user", element: <User /> },
        { path: "orders", element: <Orders /> },
        { path: "products", element: <Products /> },
        { path: "products/orderPlace", element: <OrderPlace /> },
        { path: "products/payment", element: <Payment /> },
        { path: "products/payment/regards", element: <OrderRegards /> },
        { path: "tickets", element: <Tickets /> },
        { path: "tickets/regards", element: <Regards /> },
        { path: "blog", element: <Blog /> },
      ],
    },
    {
      path: "/",
      element: <LogoOnlyLayout />,
      children: [
        { path: "login", element: <Login /> },
        { path: "register", element: <Register /> },
        { path: "404", element: <NotFound /> },
        { path: "/", element: <Navigate to="/dashboard/app" /> },
        { path: "*", element: <Navigate to="/404" /> },
      ],
    },
    { path: "*", element: <Navigate to="/404" replace /> },
  ]);
}
