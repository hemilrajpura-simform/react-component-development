import React from "react";
import "./TwoStepVerification.css";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import SmartphoneOutlinedIcon from "@mui/icons-material/SmartphoneOutlined";

import { Typography } from "@mui/material";
import HeaderNavBar from "../../components/HeaderNavBar";
import SignInBottom from "../../components/SignInBottom";
import OTPInputFields from "../../components/OTPInputFields";

const TwoStepVerification = () => {
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
              <Box
                className="SignInForm-section"
                style={{ padding: "99px 140px" }}
              >
                <Box className="SignInForm">
                  <Box className="SignInForm-TitleSection">
                    <Box className="OTP-Icon">
                      <SmartphoneOutlinedIcon />
                    </Box>
                    <Typography className="SignInForm-title">
                      Two Step Verification
                    </Typography>
                    <Typography className="SignInForm-title2">
                      Enter the verification code we sent to
                    </Typography>
                    <Typography className="SignInForm-title3">
                      ******7896
                    </Typography>
                    <Typography className="SignInForm-title4">
                      Type your 6 digit security code
                    </Typography>
                  </Box>

                  <OTPInputFields />

                  <Box className="SignInForm-Submit">
                    <input
                      type="submit"
                      name="Submit"
                      placeholder="Submit"
                      value="Submit"
                    />
                  </Box>
                  <Box className="SignInForm-notMember">
                    <Typography className="">
                      Didn’t get the code ?
                      <span className="SignInForm-signUpButton">
                        Resend or Call Us
                      </span>
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

export default TwoStepVerification;
