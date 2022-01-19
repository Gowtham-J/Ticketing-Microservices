import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import axios from "axios";
import { Link as RouterLink } from "react-router-dom";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import { Card, CardContent } from "@mui/material";
import { useNavigate } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  borderRadius: "10px",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({ product }) {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    axios
      .get(`/api/tickets/${product.id}`)
      .then((res) => {
        // console.log(product);
        setOpen(true);
      })
      .catch((err) => console.log(err));
  };

  const handleClose = () => setOpen(false);

  const handlePurchase = () => {
    navigate("/dashboard/products/orderPlace", { state: product });
    console.log("purchase pending");
  };

  return (
    <div>
      <Button onClick={handleOpen}>View</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Card sx={{ maxWidth: 350 }}>
            <CardMedia
              component="img"
              height="140"
              image={product.image}
              alt={product.title}
              style={{ objectFit: "cover" }}
            />
            <CardContent>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Typography gutterBottom variant="h5" component="div">
                  {product.title}
                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                  $ {product.price}
                </Typography>
              </div>
              <Typography variant="body2" color="text.secondary">
                {product.description}
              </Typography>
              <Typography gutterBottom variant="h6">
                Duration: {product.duration}h
              </Typography>
              <div>
                <Typography variant="p" component="div">
                  Address: {product.address}
                </Typography>
                <Typography variant="p" component="div">
                  City: {product.city}
                </Typography>
                <Typography variant="p" component="div">
                  Country: {product.country}
                </Typography>
                <Typography variant="p" component="div">
                  State: {product.state}
                </Typography>
                <Typography variant="p" component="div">
                  Country: {product.country}
                </Typography>
              </div>
            </CardContent>
            <CardActions
              style={{ display: "flex", flexDirection: "row-reverse" }}
            >
              <Button onClick={handlePurchase} size="medium">
                BUY
              </Button>
            </CardActions>
          </Card>
        </Box>
      </Modal>
    </div>
  );
}
