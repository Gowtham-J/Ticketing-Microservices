import { useState } from "react";
import { Outlet } from "react-router-dom";
// material
import { styled } from "@mui/material/styles";
//
import DashboardNavbar from "./DashboardNavbar";
import DashboardSidebar from "./DashboardSidebar";
import { useEffect } from "react";
import axios from "axios";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

// ----------------------------------------------------------------------

const APP_BAR_MOBILE = 64;
const APP_BAR_DESKTOP = 92;

const RootStyle = styled("div")({
  display: "flex",
  minHeight: "100%",
  overflow: "hidden",
});

const MainStyle = styled("div")(({ theme }) => ({
  flexGrow: 1,
  overflow: "auto",
  minHeight: "100%",
  paddingTop: APP_BAR_MOBILE + 24,
  paddingBottom: theme.spacing(10),
  [theme.breakpoints.up("lg")]: {
    paddingTop: APP_BAR_DESKTOP + 24,
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
}));

// ----------------------------------------------------------------------

export default function DashboardLayout() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState();

  const fetchData = async () => {
    try {
      const response = await axios.get("/api/users/currentuser");
      // console.log(response.data.currentUser);
      if (response.data.currentUser === null) {
        return true;
      }
      setUser(response.data.currentUser);
      return false;
    } catch (error) {
      console.log(error);
    }
  };

  // console.log("Dashboard page", user);
  useEffect(() => {
    async function run() {
      const fetch = await fetchData();
      if (fetch === true) {
        navigate("/login");
      }
    }

    run();
  }, []);

  return (
    <RootStyle>
      <DashboardNavbar user={user} onOpenSidebar={() => setOpen(true)} />
      <DashboardSidebar
        user={user}
        isOpenSidebar={open}
        onCloseSidebar={() => setOpen(false)}
      />
      <MainStyle>
        <Outlet />
      </MainStyle>
    </RootStyle>
  );
}
