import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Link from "next/link";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function TicketCard({ tickets }) {
  return (
    <Box
      sx={{
        display: "flex",
        mt: 1,
        flexWrap: "wrap",
      }}
    >
      {tickets.map((ticket, index) => {
        return (
          <Card key={index} sx={{ minWidth: 275, m: 2, maxWidth: 345 }}>
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                Ticket
              </Typography>
              <Typography variant="h5" component="div">
                {ticket.title}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {`Price: $${ticket.price}`}
              </Typography>
              <Typography variant="body2">
                Ticket Description:
                <br />
                {'"Get a ticket for you and your friends"'}
              </Typography>
            </CardContent>
            <CardActions>
              <Link href="/tickets/[ticketId]" as={`/tickets/${ticket.id}`}>
                <Button size="small">View</Button>
              </Link>
            </CardActions>
          </Card>
        );
      })}
    </Box>
  );
}
