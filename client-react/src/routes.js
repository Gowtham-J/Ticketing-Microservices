import { Navigate, useRoutes } from "react-router-dom";
// layouts
import DashboardLayout from "./layouts/dashboard";
import LogoOnlyLayout from "./layouts/LogoOnlyLayout";
//
import Login from "./pages/Login";
import Register from "./pages/Register";
import DashboardApp from "./pages/DashboardApp";
import Products from "./pages/Products";
import NotFound from "./pages/Page404";
import Tickets from "./pages/Ticket";
import Regards from "./pages/Regards";
import OrderPlace from "./pages/OrderPlace";
import Payment from "./pages/Payment";
import OrderRegards from "./pages/OrderRegards";
import Orders from "./pages/orders";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";
// ----------------------------------------------------------------------

export default function Router({ pageprops, currentUser }) {
  console.log(currentUser);

  const [auth, setAuth] = useState("");

  useEffect(() => {
    setAuth(Cookies.get("express"));
  }, [auth]);

  console.log("auth", auth);
  console.log("cookie", Cookies.get("express"));
  return useRoutes([
    {
      path: "/dashboard",
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/dashboard/app" replace /> },
        { path: "app", element: <DashboardApp /> },
        { path: "orders", element: <Orders /> },
        { path: "products", element: <Products /> },
        { path: "products/orderPlace", element: <OrderPlace /> },
        { path: "products/payment", element: <Payment /> },
        { path: "products/payment/regards", element: <OrderRegards /> },
        { path: "tickets", element: <Tickets /> },
        { path: "tickets/regards", element: <Regards /> },
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
