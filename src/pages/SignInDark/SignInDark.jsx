import React from "react";
import "./SingInDark.css";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import googleIcon from "../../utils/images/Google.png";
import appleIcon from "../../utils/images/Apple.png";

import { Typography } from "@mui/material";
import HeaderNavBar from "../../components/HeaderNavBar";
import SignInBottom from "../../components/SignInBottom";
const SignInDark = () => {
  return (
    <div className="DarkSignInSection">
      <CssBaseline />
      <HeaderNavBar />
      <Container
        sx={{
          width: "100%",
          height: "100%",
        }}
      >
        <Box
          className="SignInMain-Section"
          sx={{
            width: "100%",
            height: "85vh",
            display: "flex",
            alignContent: "center",
            alignItems: "center",
          }}
        >
          <Box className="SignInMain" sx={{ width: "100%", height: "100%" }}>
            <Box className="SignIn-right">
              <Box className="SignInForm-section">
                <Box className="SignInForm">
                  <Box className="SignInForm-TitleSection">
                    <Typography className="SignInForm-title">
                      Sign In
                    </Typography>
                    <Typography className="SignInForm-title2">
                      Your Social Campaigns
                    </Typography>
                  </Box>
                  <Box className="SignInForm-method">
                    <Box className="SignInForm-methodItem">
                      <img src={googleIcon} alt="icon" />
                      <Typography className="">Sign In with Google</Typography>
                    </Box>
                    <Box className="SignInForm-methodItem">
                      <img src={appleIcon} alt="icon" />
                      <Typography className="">Sign In with Apple</Typography>
                    </Box>
                  </Box>
                  <Box className="SignInMail-section">
                    <hr className="SignInMail-line" />
                    <Box
                      className="SignInForm-orEmail"
                      sx={{ width: "100%", textAlign: "center" }}
                    >
                      <hr className="SignInMail-line" />
                      <Typography className=""> Or with Email</Typography>
                    </Box>
                  </Box>
                  <Box className="SignInForm-Inputs">
                    <Box className="SignInForm-Input">
                      <input placeholder="Email" />
                    </Box>
                    <Box className="SignInForm-Input">
                      <input placeholder="Pasword" />
                    </Box>
                    <Box className="SignInForm-forgotPassword">
                      <Typography className="">Forgot Password?</Typography>
                    </Box>
                  </Box>
                  <Box className="SignInForm-Submit">
                    <input
                      type="submit"
                      name="Sign In"
                      placeholder="Sign In"
                      value="Sign In"
                    />
                  </Box>
                  <Box className="SignInForm-notMember">
                    <Typography className="">
                      Not a Member yet?
                      <span className="SignInForm-signUpButton"> Sign Up</span>
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        <SignInBottom />
      </Container>
    </div>
  );
};

export default SignInDark;
