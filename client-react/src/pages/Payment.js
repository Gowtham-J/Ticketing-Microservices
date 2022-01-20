// material
import { Box, Grid, Container, Typography } from "@mui/material";
// components
import Page from "../components/Page";
import { useLocation } from "react-router-dom";
import Button from "@mui/material/Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { Icon } from "@iconify/react";
import arrowCircleLeftFill from "@iconify/icons-eva/arrow-circle-left-fill";
import StripeCheckout from "react-stripe-checkout";

// ----------------------------------------------------------------------

export default function Payment() {
  const navigate = useNavigate();
  const { state: order } = useLocation();
  const [error, setError] = useState("");
  const [timeLeft, setTimeLeft] = useState(0);

  const handleExpire = () => {
    navigate("/dashboard/products");
  };

  const getToken = (token) => {
    const config = { headers: { "Content-Type": "application/json" } };
    const data = JSON.stringify({
      orderId: order.id,
      token: token.id,
    });
    axios
      .post("/api/payments", data, config)
      .then((res) => {
        navigate("/dashboard/products/payment/regards", { replace: true });
      })
      .catch((err) => {
        console.log("error", err.response.data.errors[0].message);
        setError(err.response.data.errors[0].message);
      });
  };

  useEffect(() => {
    const findTimeLeft = () => {
      const msLeft = new Date(order.expiresAt) - new Date();
      setTimeLeft(Math.round(msLeft / 1000));
    };

    findTimeLeft();
    const timerId = setInterval(findTimeLeft, 1000);
    return () => {
      clearInterval(timerId);
    };
  }, [order]);

  return (
    <Page title="Payment | Minimal-UI">
      <Container maxWidth="xl">
        <Box sx={{ pb: 5 }}>
          <Typography variant="h4">A Card that do's Things Right</Typography>
        </Box>
        <Typography variant="h2">Order Details:</Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={12}>
            <Typography variant="h4">
              Hi, you have to complete the payment with in a minute or less,
              else the order will be cancelled automatically{" "}
            </Typography>
          </Grid>

          <Grid item xs={12} sm={12} md={12}>
            {timeLeft > 0 ? (
              <Typography variant="subtitle1">
                <Grid item xs={12} sm={12} md={12}>
                  <Typography variant="subtitle1">
                    <Typography
                      component="span"
                      variant="body1"
                      sx={{
                        color: "text.disabled",
                      }}
                    >
                      Order ID:{" "}
                    </Typography>
                    <Typography sx={{ padding: "5px 0" }} variant="p">
                      #{order.id}
                    </Typography>
                  </Typography>
                </Grid>
                <Typography variant="h6" sx={{ padding: "5px 0" }}>
                  You got {timeLeft} seconds left!!
                </Typography>
                <Typography sx={{ padding: "5px 0" }} variant="p">
                  Payment type: "Card"
                </Typography>
                <div style={{ padding: "5px 0" }}>
                  <StripeCheckout
                    ComponentClass="div"
                    description="Your payment gateway then takes this information, and sending it via a shielded link to your bank account."
                    token={getToken}
                    stripeKey="pk_test_51KDkXJG85dnfaJZoUdToG99FXqp7JhMWyplUVFCowsDFAgP3Hrxqf9j8kGGa81JTokd3n0SE1zFWygYVgU4aNqnk000FwSvMmN"
                    amount={order ? order.ticket.price * 100 : 0}
                  />
                </div>
              </Typography>
            ) : (
              <>
                <Typography variant="h6">
                  Times up!! try to re-purchase the product or the new one
                </Typography>
                <Button
                  variant="contained"
                  sx={{ mt: 2 }}
                  onClick={handleExpire}
                  size="medium"
                >
                  <Icon icon={arrowCircleLeftFill} width={22} height={22} />
                  Back to products
                </Button>
              </>
            )}
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
