// material
import { useState } from "react";
import { Box, Grid, Container, Typography } from "@mui/material";
// components
import Page from "../components/Page";
import { useLocation } from "react-router-dom";
import Button from "@mui/material/Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// ----------------------------------------------------------------------

export default function OrderPlace() {
  const [error, setError] = useState("");
  const { state: product } = useLocation();
  const navigate = useNavigate();
  let finalOrder = {};
  const handlePlaceOrder = () => {
    const config = { headers: { "Content-Type": "application/json" } };
    const data = JSON.stringify({
      ticketId: product.id,
    });
    axios
      .post("/api/orders", data, config)
      .then((res) => {
        // console.log("result of order", res.data);
        finalOrder = res.data;
        navigate("/dashboard/products/payment", {
          replace: true,
          state: finalOrder,
        });
      })
      .catch((err) => {
        setError(err.response.data.errors[0].message);
        console.log(err.response.data.errors[0].message);
        finalOrder = {};
      });
  };

  return (
    <Page title="Order | Minimal-UI">
      <Container maxWidth="xl">
        <Box sx={{ pb: 5 }}>
          <Typography variant="h4">
            Let us make order placement easy for you
          </Typography>
        </Box>
        <Typography variant="h2">Ticket Details:</Typography>
        <Grid item xs={12} sm={12} md={12}>
          <Typography variant="subtitle1">
            <Typography
              component="span"
              variant="body1"
              sx={{
                color: "text.disabled",
              }}
            >
              Ticket ID:{" "}
            </Typography>
            <Typography variant="p">#{product.id}</Typography>
          </Typography>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h4">{product.title}</Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h4">{`$${product.price}`}</Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <Typography variant="subtitle1">
              <Typography
                component="span"
                variant="body1"
                sx={{
                  color: "text.disabled",
                }}
              >
                Duration:{" "}
              </Typography>
              <Typography variant="p">{product.duration}hr</Typography>
            </Typography>
            <Typography variant="subtitle1">
              <Typography
                component="span"
                variant="body1"
                sx={{
                  color: "text.disabled",
                }}
              >
                Description:{" "}
              </Typography>
              <Typography variant="p">{product.description}</Typography>
            </Typography>
            <Typography variant="subtitle1">
              <Typography
                component="span"
                variant="body1"
                sx={{
                  color: "text.disabled",
                }}
              >
                Address:{" "}
              </Typography>
              <Typography variant="p">{product.address}</Typography>
            </Typography>
            <Typography variant="subtitle1">
              <Typography
                component="span"
                variant="body1"
                sx={{
                  color: "text.disabled",
                }}
              >
                City:{" "}
              </Typography>
              <Typography variant="p">{product.city}</Typography>
            </Typography>
            <Typography variant="subtitle1">
              <Typography
                component="span"
                variant="body1"
                sx={{
                  color: "text.disabled",
                }}
              >
                State:{" "}
              </Typography>
              <Typography variant="p">{product.state}</Typography>
            </Typography>
            <Typography variant="subtitle1">
              <Typography
                component="span"
                variant="body1"
                sx={{
                  color: "text.disabled",
                }}
              >
                Country:{" "}
              </Typography>
              <Typography variant="p">{product.country}</Typography>
            </Typography>
          </Grid>
        </Grid>
        <Button
          variant="contained"
          sx={{ mt: 2 }}
          onClick={handlePlaceOrder}
          size="medium"
        >
          Place Order {`$${product.price}`}
        </Button>
      </Container>
    </Page>
  );
}
