import * as React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

export default function TicketForm({ values, setValues }) {
  const onBlur = () => {
    const value = parseFloat(values.price);

    if (isNaN(value)) {
      return;
    }

    setValues({ price: value.toFixed(2) });
  };

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
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
        <FormControl fullWidth sx={{ m: 1 }}>
          <InputLabel htmlFor="outlined-adornment-price">Price</InputLabel>
          <OutlinedInput
            id="outlined-adornment-price"
            value={values.title}
            onChange={handleChange("title")}
            label="Title"
          />
        </FormControl>
        <FormControl fullWidth sx={{ m: 1 }}>
          <InputLabel htmlFor="outlined-adornment-price">Price</InputLabel>
          <OutlinedInput
            id="outlined-adornment-price"
            value={values.price}
            onBlur={onBlur}
            onChange={handleChange("price")}
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
            label="Price"
          />
        </FormControl>
      </Box>
    </>
  );
}
