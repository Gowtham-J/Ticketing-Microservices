import * as Yup from "yup";
import { useState } from "react";
import { Icon } from "@iconify/react";
import { useFormik, Form, FormikProvider } from "formik";
import eyeFill from "@iconify/icons-eva/eye-fill";
import eyeOffFill from "@iconify/icons-eva/eye-off-fill";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// material
import { Stack, TextField, IconButton, InputAdornment } from "@mui/material";
import { LoadingButton } from "@mui/lab";

// ----------------------------------------------------------------------

export default function RegisterForm() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [result, setResult] = useState("");
  const [error, setError] = useState("");

  const RegisterSchema = Yup.object().shape({
    title: Yup.string().required("Title required"),
    price: Yup.number().required("Price required"),
    address: Yup.string().required("Address is required"),
    duration: Yup.string().required("Duration of the game is required"),
    description: Yup.string().required("Description is required"),
    city: Yup.string().required("City is required"),
    state: Yup.string().required("State is required"),
    country: Yup.string().required("Country is required"),
    image: Yup.string().required("Image is required"),
  });

  const formik = useFormik({
    initialValues: {
      title: "",
      price: "",
      address: "",
      duration: "",
      description: "",
      city: "",
      state: "",
      country: "",
      image: "",
    },
    validationSchema: RegisterSchema,
    onSubmit: (e) => {
      // e.preventDefault();
      const config = { headers: { "Content-Type": "application/json" } };
      const data = JSON.stringify({
        title: values.title,
        price: values.price,
        address: values.address,
        duration: values.duration,
        description: values.description,
        city: values.city,
        state: values.state,
        country: values.country,
        image: values.image,
      });

      axios
        .post("/api/tickets", data, config)
        .then((res) => {
          setResult(res.data);
          setError("");

          navigate("/dashboard/tickets/regards", { replace: true });
        })
        .catch((err) => {
          setError(err.response.data.errors[0].message);
          setResult("");
          formik.setSubmitting(false);
        });
    },
  });

  const { errors, touched, isSubmitting, handleSubmit, values, getFieldProps } =
    formik;

  return (
    <FormikProvider value={formik}>
      <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Stack spacing={3}>
          <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
            <TextField
              fullWidth
              label="Title"
              {...getFieldProps("title")}
              error={Boolean(touched.title && errors.title)}
              helperText={touched.title && errors.title}
            />

            <TextField
              fullWidth
              label="Price"
              {...getFieldProps("price")}
              error={Boolean(touched.price && errors.price)}
              helperText={touched.price && errors.price}
            />
          </Stack>
          <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
            <TextField
              fullWidth
              label="Duration in hours"
              {...getFieldProps("duration")}
              error={Boolean(touched.duration && errors.duration)}
              helperText={touched.duration && errors.duration}
            />

            <TextField
              fullWidth
              label="Image address link"
              {...getFieldProps("image")}
              error={Boolean(touched.image && errors.image)}
              helperText={touched.image && errors.image}
            />
          </Stack>
          <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
            <TextField
              fullWidth
              label="City"
              {...getFieldProps("city")}
              error={Boolean(touched.city && errors.city)}
              helperText={touched.city && errors.city}
            />

            <TextField
              fullWidth
              label="State"
              {...getFieldProps("state")}
              error={Boolean(touched.state && errors.state)}
              helperText={touched.state && errors.state}
            />
            <TextField
              fullWidth
              label="Country"
              {...getFieldProps("country")}
              error={Boolean(touched.country && errors.country)}
              helperText={touched.country && errors.country}
            />
          </Stack>

          <TextField
            fullWidth
            // autoComplete="username"
            // type="text"
            label="Address"
            {...getFieldProps("address")}
            error={Boolean(touched.address && errors.address)}
            helperText={touched.address && errors.address}
          />
          <TextField
            fullWidth
            // autoComplete="number"
            // type="number"
            label="Description"
            {...getFieldProps("description")}
            error={Boolean(touched.description && errors.description)}
            helperText={touched.description && errors.description}
          />

          <LoadingButton
            fullWidth
            size="large"
            type="submit"
            variant="contained"
            loading={isSubmitting}
          >
            Submit
          </LoadingButton>
        </Stack>
      </Form>
    </FormikProvider>
  );
}
