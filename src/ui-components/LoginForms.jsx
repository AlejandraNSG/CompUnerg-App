import React, { useState, useEffect } from "react";
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";
import { Form, FormikProvider, useFormik } from "formik";
import * as Yup from "yup";

import {
  Box,
  Checkbox,
  FormControlLabel,
  IconButton,
  InputAdornment,
  Link,
  Stack,
  TextField,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import clienteFrontend from "../config/axios.jsx";  

let easing = [0.6, -0.05, 0.01, 0.99];
const animate = {
  opacity: 1,
  y: 0,
  transition: {
    duration: 0.6,
    ease: easing,
    delay: 0.16,
  },
};

const LoginForm = ({ setAuth }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const [showPassword, setShowPassword] = useState(false);

  const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .email("Provide a valid email address")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const handleLogin = async (data) => {
    console.log("data: ", data);
    try {
      // const result = await axios.post(
      //   "http://localhost:4000/api/v1/signin",
      //   data,
      // );

      const result = await clienteFrontend.post('/signin', data);


      console.log(result.response.data.msg);


      // console.log("result: ", result);
    } catch (error) {
      console.error(error);
    }
  };

  const handleGetUsers = async () => {
    try {
      // const result = await axios.get("http://localhost:4000/api/v1/users", {
      //   headers: {
      //     Authorization:
      //       "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZGM4MGQwNWVjM2IyNzIwZjA1MTc1YSIsImVtYWlsIjoiZXNhYXJhZmFlbEBob3RtYWlsLmNvbSIsInJvbGVzIjpbIkFkbWluIiwiU3R1ZGVudCJdLCJpYXQiOjE2ODQ0NjIzMzksImV4cCI6MTY4NDQ2NTkzOX0.Oe_Qh6xuf-L5EVsK5M_LEiZ9Tc256PFhbHVn73G6fMg",
      //   },
      // });

      const result = await clienteFrontend.get("http://localhost:4000/api/v1/users", {
        headers: {
          Authorization:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZGM4MGQwNWVjM2IyNzIwZjA1MTc1YSIsImVtYWlsIjoiZXNhYXJhZmFlbEBob3RtYWlsLmNvbSIsInJvbGVzIjpbIkFkbWluIiwiU3R1ZGVudCJdLCJpYXQiOjE2ODQ0NjIzMzksImV4cCI6MTY4NDQ2NTkzOX0.Oe_Qh6xuf-L5EVsK5M_LEiZ9Tc256PFhbHVn73G6fMg",
        }
      })

      console.log("result: ", result);
    } catch (error) {
      console.error(error);
    }
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      // remember: true,
    },
    validationSchema: LoginSchema,
    onSubmit: () => {
      console.log("submitting...");
      console.log("datos del formulario: ", formik.values);
      handleLogin(formik.values);
      // setTimeout(() => {
      //   console.log("submited!!");
      //   setAuth(true);
      //   navigate(from, { replace: true });
      // }, 2000);
    },
  });

  useEffect(() => {
    handleGetUsers();
  }, []);

  const { errors, touched, values, isSubmitting, handleSubmit, getFieldProps } =
    formik;

  return (
    <FormikProvider value={formik}>
      <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Box
          component={motion.div}
          animate={{
            transition: {
              staggerChildren: 0.55,
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 3,
            }}
            component={motion.div}
            initial={{ opacity: 0, y: 40 }}
            animate={animate}
          >
            <TextField
              fullWidth
              autoComplete="username"
              type="email"
              label="Email Address"
              {...getFieldProps("email")}
              error={Boolean(touched.email && errors.email)}
              helperText={touched.email && errors.email}
            />

            <TextField
              fullWidth
              autoComplete="current-password"
              type={showPassword ? "text" : "password"}
              label="Password"
              {...getFieldProps("password")}
              error={Boolean(touched.password && errors.password)}
              helperText={touched.password && errors.password}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowPassword((prev) => !prev)}
                    >
                      {showPassword ? (
                        <Icon icon="eva:eye-fill" />
                      ) : (
                        <Icon icon="eva:eye-off-fill" />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Box>

          <Box
            component={motion.div}
            initial={{ opacity: 0, y: 20 }}
            animate={animate}
          >
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              sx={{ my: 2 }}
            >
              {/* <FormControlLabel
                control={
                  <Checkbox
                    {...getFieldProps("remember")}
                    checked={values.remember}
                  />
                }
                label="Remember me"
              /> */}

              <Link component={RouterLink} variant="subtitle2" to="/forgot">
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
              {isSubmitting ? "loading..." : "Login"}
            </LoadingButton>
          </Box>
        </Box>
      </Form>
    </FormikProvider>
  );
};

export default LoginForm;
