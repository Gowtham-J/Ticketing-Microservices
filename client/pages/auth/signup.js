import { useState, useEffect } from "react";
import Router from "next/router";
import Button from "@mui/material/Button";
import useRequest from "../../hooks/use-request";
import Form from "../../components/form/authForm/Form";
const SignUp = () => {
  const [values, setValues] = useState({
    password: "",
    email: "",
    showPassword: false,
  });
  const { doRequest, errors } = useRequest({
    url: "/api/users/signup",
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
        color="success"
      >
        Sign Up
      </Button>
    </form>
  );
};

export default SignUp;
