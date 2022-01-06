import { useState, useEffect } from "react";
import Router from "next/router";
import Button from "@mui/material/Button";
import useRequest from "../../hooks/use-request";
import Form from "../../components/form/authForm/Form";
const SignIn = () => {
  const [values, setValues] = useState({
    password: "",
    email: "",
    showPassword: false,
  });
  const { doRequest, errors } = useRequest({
    url: "/api/users/signin",
    method: "post",
    body: {
      email: values.email,
      password: values.password,
    },
    onSuccess: () => Router.push("/"),
  });

  const onSubmit = async (event) => {
    event.preventDefault();

    await doRequest();
  };

  return (
    <form onSubmit={onSubmit}>
      <Form values={values} setValues={setValues} />
      {errors}
      <Button
        onClick={onSubmit}
        variant="contained"
        sx={{ marginLeft: "5px" }}
        color="info"
      >
        Sign In
      </Button>
    </form>
  );
};

export default SignIn;
