// material
import { Box, Container, Typography } from "@mui/material";
// components
import Page from "../components/Page";
import { Icon } from "@iconify/react";
import checkmarkCircleFill from "@iconify/icons-eva/checkmark-circle-fill";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
// ----------------------------------------------------------------------

export default function OrderRegards() {
  const navigate = useNavigate();
  const handleDirect = () => {
    navigate("/dashboard/orders");
  };
  return (
    <Page
      title="OrderRegards | Minimal-UI"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container maxWidth="xl">
        <Box sx={{ padding: "10px 0" }}>
          <Typography variant="h2">
            Order successfully placed{" "}
            <Icon
              style={{ color: "#00AB55" }}
              icon={checkmarkCircleFill}
              width={50}
              height={50}
            />{" "}
          </Typography>
        </Box>
        <Button
          variant="contained"
          sx={{ mt: 2 }}
          onClick={handleDirect}
          size="medium"
        >
          My order logs
        </Button>
      </Container>
    </Page>
  );
}
