import { useState } from "react";
import Button from "@mui/material/Button";
import Router from "next/router";
import useRequest from "../../hooks/use-request";
import TicketForm from "../../components/form/ticketForm/TicketForm";

const NewTicket = () => {
  const [values, setValues] = useState({
    title: "",
    price: "",
  });
  const { doRequest, errors } = useRequest({
    url: "/api/tickets",
    method: "post",
    body: {
      title: values.title,
      price: values.price,
    },
    onSuccess: () => Router.push("/"),
  });

  console.log(values.price, values.title);

  const onSubmit = async (event) => {
    console.log("submit");
    event.preventDefault();

    await doRequest();
  };

  const onBlur = () => {
    const value = parseFloat(price);

    if (isNaN(value)) {
      return;
    }

    setPrice(value.toFixed(2));
  };

  return (
    <div>
      <h1>Create a Ticket</h1>
      <form onSubmit={onSubmit}>
        {/* <div className="form-group pt-3">
          <label>Title</label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="form-control "
          />
        </div>
        <div className="form-group pt-3">
          <label>Price</label>
          <input
            value={price}
            onBlur={onBlur}
            onChange={(e) => setPrice(e.target.value)}
            className="form-control"
          />
        </div> */}
        <TicketForm values={values} setValues={setValues} />
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
