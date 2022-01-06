import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";

export default function TicketPaper({ ticket, doRequest }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        "& > :not(style)": {
          m: 1,
          minWidth: 200,
          minHeight: 200,
        },
      }}
    >
      <Paper
        sx={{
          minWidth: 150,
          minHeight: 150,
          padding: 1,
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "column",
        }}
        elevation={3}
      >
        <h1>{ticket.title}</h1>
        <h4>Price: {ticket.price}</h4>

        <Button
          onClick={() => doRequest()}
          variant="contained"
          sx={{ marginLeft: "5px" }}
          color="info"
          a
        >
          Purchase
        </Button>
      </Paper>
    </Box>
  );
}
