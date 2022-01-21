import * as Yup from "yup";
import { useState } from "react";
import { Link as RouterLink, useNavigate, Navigate } from "react-router-dom";
import { useFormik, Form, FormikProvider } from "formik";
import { Icon } from "@iconify/react";
import eyeFill from "@iconify/icons-eva/eye-fill";
import eyeOffFill from "@iconify/icons-eva/eye-off-fill";

// material
import {
  Link,
  Stack,
  Checkbox,
  TextField,
  IconButton,
  InputAdornment,
  FormControlLabel,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import axios from "axios";
// ----------------------------------------------------------------------

export default function LoginForm() {
  // const [result, setResult] = useState("");
  // const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  let LoginSchema = Yup.object().shape({
    email: Yup.string()
      .email("Email must be a valid email address")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      remember: true,
    },
    validationSchema: LoginSchema,
    onSubmit: async () => {
      const config = { headers: { "Content-Type": "application/json" } };
      const data = JSON.stringify({
        email: values.email,
        password: values.password,
      });
      // console.log(data);
      try {
        const response = await axios.post("/api/users/signin", data, config);
        console.log("response", response);
        // setUser(response.data);
        navigate("/dashboard/app", { replace: true, state: response.data });
      } catch (error) {}

      // axios
      //   .post("/api/users/signin", data, config)
      //   .then((res) => {
      //     console.log("result", res);
      //     setResult(res);
      //     setError("");
      //     setUser(res.data);
      //     console.log("login page result", result);
      //     console.log("login page", user);

      //     navigate("/dashboard/app", { replace: true, state: user });
      //   })
      //   .catch((err) => {
      //     // console.log("error", err.response.data.errors[0].message);
      //     setError(err.response.data.errors[0].message);
      //     setResult("");
      //     formik.setSubmitting(false);
      //   });
    },
  });
  // console.log("user", user);

  const { errors, touched, values, isSubmitting, handleSubmit, getFieldProps } =
    formik;

  const handleShowPassword = () => {
    setShowPassword((show) => !show);
  };

  return (
    <FormikProvider value={formik}>
      <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Stack spacing={3}>
          <TextField
            fullWidth
            autoComplete="username"
            type="email"
            label="Email address"
            {...getFieldProps("email")}
            error={Boolean(touched.email && errors.email)}
            helperText={touched.email && errors.email}
          />
          {error ? <div style={{ color: "red" }}>{error}</div> : null}

          <TextField
            fullWidth
            autoComplete="current-password"
            type={showPassword ? "text" : "password"}
            label="Password"
            {...getFieldProps("password")}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleShowPassword} edge="end">
                    <Icon icon={showPassword ? eyeFill : eyeOffFill} />
                  </IconButton>
                </InputAdornment>
              ),
            }}
            error={Boolean(touched.password && errors.password)}
            helperText={touched.password && errors.password}
          />
          {error ? <div style={{ color: "red" }}>{error}</div> : null}
        </Stack>

        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{ my: 2 }}
        >
          <FormControlLabel
            control={
              <Checkbox
                {...getFieldProps("remember")}
                checked={values.remember}
              />
            }
            label="Remember me"
          />

          <Link component={RouterLink} variant="subtitle2" to="#">
            Forgot password?
          </Link>
        </Stack>

        <LoadingButton
          fullWidth
          size="large"
          type="submit"
          variant="contained"
          loading={isSubmitting}
        >
          Login
        </LoadingButton>
      </Form>
    </FormikProvider>
  );
}
