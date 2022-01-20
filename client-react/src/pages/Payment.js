// material
import { Box, Grid, Container, Typography } from "@mui/material";
// components
import Page from "../components/Page";
import { Icon } from "@iconify/react";
import checkmarkCircleFill from "@iconify/icons-eva/checkmark-circle-fill";

// ----------------------------------------------------------------------

export default function Payment() {
  return (
    <Page
      title="Payment | Minimal-UI"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container maxWidth="xl">
        <Box>
          <Typography variant="h2">
            Thank you for posting.{" "}
            <Icon
              style={{ color: "#00AB55" }}
              icon={checkmarkCircleFill}
              width={50}
              height={50}
            />{" "}
          </Typography>
        </Box>
      </Container>
    </Page>
  );
}
