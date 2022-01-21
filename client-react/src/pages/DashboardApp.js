// material
import { Box, Grid, Container, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";
// components
import Page from "../components/Page";
import { AppNewsUpdate, AppTrafficBySite } from "../components/_dashboard/app";

// ----------------------------------------------------------------------

export default function DashboardApp() {
  const { state: user } = useLocation();
  console.log("Dashboard page", user);
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
