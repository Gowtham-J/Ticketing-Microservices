import Router from "next/router";
import useRequest from "../../hooks/use-request";
import Button from "@mui/material/Button";
import TicketPaper from "../../components/Paper/TicketPaper";

const TicketShow = ({ ticket }) => {
  const { doRequest, errors } = useRequest({
    url: "/api/orders",
    method: "post",
    body: {
      ticketId: ticket.id,
    },
    onSuccess: (order) =>
      Router.push("/orders/[orderId]", `/orders/${order.id}`),
  });
  console.log(errors);

  return (
    <div>
      <h1>{ticket.title}</h1>
      <h4>Price: {ticket.price}</h4>
      {/* <button onClick={() => doRequest()} className="btn btn-primary">
        Purchase
      </button> */}
      <Button
        onClick={() => doRequest()}
        variant="contained"
        // sx={{ marginLeft: "5px" }}
        color="info"
        a
      >
        Purchase
      </Button>
      {/* <TicketPaper ticket={ticket} doRequest={doRequest} /> */}
      {errors}
    </div>
  );
};

TicketShow.getInitialProps = async (context, client) => {
  const { ticketId } = context.query;
  const { data } = await client.get(`/api/tickets/${ticketId}`);

  return { ticket: data };
};

export default TicketShow;
