// material
import { Box, Grid, Container, Typography } from "@mui/material";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
// components
import Page from "../components/Page";
import { AppNewsUpdate, AppTrafficBySite } from "../components/_dashboard/app";
import { useEffect, useState } from "react";
import axios from "axios";

// ----------------------------------------------------------------------

export default function DashboardApp() {
  // const { state: user } = useLocation();
  const navigate = useNavigate();
  const [user, setUser] = useState("");

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
    <Page title="Dashboard | Minimal-UI">
      <Container maxWidth="xl">
        <Box sx={{ pb: 5 }}>
          <Typography variant="h4">Hi, Welcome back</Typography>
        </Box>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={8}>
            <AppNewsUpdate />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <AppTrafficBySite />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
