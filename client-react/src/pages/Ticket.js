// material
import { Box, Grid, Container, Typography } from "@mui/material";
// components
import Page from "../components/Page";
import { TicketForm } from "../components/_dashboard/ticketsForm";

// ----------------------------------------------------------------------

export default function Tickets() {
  return (
    <Page title="Tickets | Minimal-UI">
      <Container maxWidth="xl">
        <Box sx={{ pb: 5 }}>
          <Typography variant="h4">Hi, Let's publish an event</Typography>
        </Box>
        <Grid container spacing={3}>
          <TicketForm />
        </Grid>
      </Container>
    </Page>
  );
}
