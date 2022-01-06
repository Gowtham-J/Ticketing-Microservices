import * as React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

export default function TicketForm({ title, setTitle, price, setPrice }) {
  const onBlur = () => {
    const value = parseFloat(price);

    if (isNaN(value)) {
      return;
    }

    setPrice(value.toFixed(2));
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          mt: 1,
          flexDirection: "column",
          flexWrap: "wrap",
        }}
      >
        <FormControl fullWidth sx={{ m: 1, width: "60ch" }}>
          <InputLabel htmlFor="outlined-adornment-price">Title</InputLabel>
          <OutlinedInput
            id="outlined-adornment-price"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            label="Title"
          />
        </FormControl>
        <FormControl fullWidth sx={{ m: 1, width: "60ch" }}>
          <InputLabel htmlFor="outlined-adornment-price">Price</InputLabel>
          <OutlinedInput
            id="outlined-adornment-price"
            value={price}
            onBlur={onBlur}
            onChange={(e) => setPrice(e.target.value)}
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
            label="Price"
          />
        </FormControl>
      </Box>
    </>
  );
}
