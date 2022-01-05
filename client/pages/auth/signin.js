import { useState, useEffect } from "react";
import Router from "next/router";
import Button from "@mui/material/Button";
import useRequest from "../../hooks/use-request";
import Form from "../../components/form/Form";
const SignIn = () => {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const { doRequest, errors } = useRequest({
  //   url: "/api/users/signin",
  //   method: "post",
  //   body: {
  //     email,
  //     password,
  //   },
  //   onSuccess: () => Router.push("/"),
  // });

  // const onSubmit = async (event) => {
  //   event.preventDefault();

  //   await doRequest();
  // };

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
    // <form onSubmit={onSubmit}>
    //   <h1>Sign In</h1>
    //   <div className="form-group">
    //     <label>Email Address</label>
    //     <input
    //       value={email}
    //       onChange={(e) => setEmail(e.target.value)}
    //       className="form-control"
    //     />
    //   </div>
    //   <div className="form-group">
    //     <label>Password</label>
    //     <input
    //       value={password}
    //       onChange={(e) => setPassword(e.target.value)}
    //       type="password"
    //       className="form-control"
    //     />
    //   </div>
    //   {errors}
    //   <button className="btn btn-primary">Sign In</button>
    // </form>
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
