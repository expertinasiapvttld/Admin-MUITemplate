import * as React from "react";
import Avatar from "@mui/material/Avatar";
import CssBaseline from "@mui/material/CssBaseline";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import images from "../../components/assets/img/bg12.jpg";
import Logo from "../../components/logo/logo";
import { Icon } from "@iconify/react";
import AdminButton from "../../components/adminButton";
import AdminInput from "../../components/adminInput";
import { useState } from "react";
import secureLocalStorage from "react-secure-storage";
import { color } from "../../theme/color";
import { useNavigate } from "react-router-dom";
// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function Login() {
  const Navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formError, setFormError] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const handleSubmit = () => {
    const validEmail = new RegExp(
      "^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$"
    );

    if (!email) {
      setFormError((formError) => ({
        ...formError,
        email: "Please Enter Your Email Address",
      }));
      return;
    } else if (!email.includes("@")) {
      setFormError((formError) => ({
        ...formError,
        email: "Please enter a valid email address",
      }));
      return;
    } else if (!email.includes(".")) {
      setFormError((formError) => ({
        ...formError,
        email: "Please enter a valid email address",
      }));
      return;
    } else if (!validEmail.test(email)) {
      setFormError((formError) => ({
        ...formError,
        email: "Please enter a valid email address",
      }));
      return;
    }
    if (!password) {
      setFormError((formError) => ({
        ...formError,
        password: "Please enter a password",
      }));
      return;
    }

    secureLocalStorage.setItem("authenticated", true);
    Navigate("/dashboard");
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid
        container
        component="main"
        sx={{
          backgroundColor: color.main,
         
          padding: { xs: false, sm: false, md: 10, lg: 5 },
        }}
      >
        <CssBaseline />

        <Grid
          item
          xs={false}
          sm={4}
          md={8}

          sx={{
            backgroundImage: `url(${images})`,
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "contain",
            backgroundPosition: "center",
            height:500
          }}
        />
        <Grid item xs={12} sm={8} md={4} component={Paper} square>
          <Logo />
          <Box
            sx={{
              my: 5,
              mx: 5,
              //   display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar
              sx={{
                m: 1,
                bgcolor: color.main,
                width: 50,
                height: 50,
                marginLeft: 19,
              }}
            >
              <Icon icon="fluent-mdl2:signin" />
            </Avatar>
            <Typography
              sx={{ textAlign: "center" }}
              component="h1"
              variant="h5"
            >
              Sign in
            </Typography>
            <Box noValidate sx={{ mt: 1 }}>
              <AdminInput
                title="Email Adress"
                type="email"
                value={email}
                onChange={(val) => {
                  if (val) {
                    setEmail(val.target.value);
                    setFormError((formError) => ({
                      ...formError,
                      email: "",
                    }));
                  }
                }}
                formError={formError.email}
              />
              <AdminInput
                title="Password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(val) => {
                  if (val) {
                    setPassword(val.target.value);
                    setFormError((formError) => ({
                      ...formError,
                      password: "",
                    }));
                  }
                }}
                formError={formError.password}
                endIcon={<Icon icon="tabler:eye" width="28" height="28" />}
                PasswordShowClick={() => setShowPassword(!showPassword)}
              />

              <Link
                sx={{
                  float: "right",
                  textDecoration: "none",
                  fontSize: 15,
                  color: color.main,
                  fontWeight: 600,
                }}
                variant="body2"
                href="forgotPassword"
              >
                Forgot password?
              </Link>
              <AdminButton
                onClick={handleSubmit}
                title={"Sign IN"}
                fullWidth="true"
              />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
