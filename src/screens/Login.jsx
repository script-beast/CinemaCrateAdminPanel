import React from "react";
import { Button, Card, Grid, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

import { MyPasswordField, MyTextField } from "../components/common";
import { loginService } from "../services";
import { myToast } from "../utils";

const Login = () => {
  const navigate = useNavigate();

  const [formDta, setFormData] = React.useState({ email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formDta, [e.target.name]: e.target.value });
  };

  const resetCredentials = () => {
    setFormData({ email: "admin@gmail.com", password: "Admin@9090" });
  };

  const handleSubmit = () => {
    loginService(formDta)
      .then((res) => {
        myToast.success(res);
        navigate("/dashboard");
      })
      .catch((err) => {
        myToast.error(err);
      });
  };

  return (
    <Stack
      spacing={2}
      sx={{ height: "100vh" }}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Card variant="loginCard">
        <Grid container spacing={2} justifyContent="center">
          <Grid item sm={12}>
            <Typography variant="h5" textAlign="center">
              Admin Login
            </Typography>
          </Grid>
          <Grid item sm={12}>
            <MyTextField
              title="Email"
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formDta.email}
              onChange={handleChange}
            />
          </Grid>
          <Grid item sm={12}>
            <MyPasswordField
              title="Password"
              name="password"
              placeholder="Enter your password"
              value={formDta.password}
              onChange={handleChange}
            />
          </Grid>
          <Grid item sm={12}>
            <Stack direction="row" spacing={2}>
              <Button variant="secondary" onClick={resetCredentials}>
                Reset
              </Button>
              <Button variant="contained" onClick={handleSubmit}>
                Login
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Card>
    </Stack>
  );
};

export default Login;
