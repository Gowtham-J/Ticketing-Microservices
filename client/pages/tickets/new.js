import { useState } from "react";
import Button from "@mui/material/Button";
import Router from "next/router";
import useRequest from "../../hooks/use-request";
import TicketForm from "../../components/form/ticketForm/TicketForm";

const NewTicket = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  // const [values, setValues] = useState({
  //   title: "",
  //   price: "",
  // });
  const { doRequest, errors } = useRequest({
    url: "/api/tickets",
    method: "post",
    body: {
      title,
      price,
    },
    onSuccess: () => Router.push("/"),
  });

  console.log(price, title);

  const onSubmit = async (event) => {
    console.log("submit");
    event.preventDefault();

    await doRequest();
  };

  return (
    <div>
      <h1>Create a Ticket</h1>
      <form onSubmit={onSubmit}>
        <TicketForm
          title={title}
          setTitle={setTitle}
          setPrice={setPrice}
          price={price}
        />
        <div className="pt-3">{errors}</div>
        <Button
          onClick={onSubmit}
          variant="contained"
          sx={{ marginLeft: "5px" }}
          color="info"
        >
          Submit
        </Button>
        <button className="btn btn-sm">submit</button>
      </form>
    </div>
  );
};

export default NewTicket;
