import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

const PagesList = () => {
  return (
    <div className="DarkSignInSection">
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
          }}
        >
          <Box className="SignInMain" sx={{ width: "100%", height: "100%" }}>
            <Box className="SignIn-right">
              <Box
                className="SignInForm-section"
                style={{ padding: "99px 140px" }}
              >
                <Box className="SignInForm">
                  <Box>
                    <Typography
                      className="PagesListHeader"
                      style={{ padding: "20px" }}
                    >
                      React Component Development
                    </Typography>
                    <Typography className="PagesListHeader2">
                      Practical 12
                    </Typography>
                  </Box>
                  <Box className="PagesList-items">
                    <Typography className="SignInForm-title4">
                      <Link to="login">Page 1: SignIn</Link>
                    </Typography>
                    <Typography className="SignInForm-title4">
                      <Link to="loginDark">Page 2: SignIn Dark Theme</Link>
                    </Typography>
                    <Typography className="SignInForm-title4">
                      <Link to="dashboard"> Page 3: Dashboard</Link>
                    </Typography>
                    <Typography className="SignInForm-title4">
                      <Link to="twoStepVerification">
                        Page 4: Two Step Verification
                      </Link>
                    </Typography>
                    <Typography className="SignInForm-title4">
                      <Link to={Math.random().toString()}>
                        {" "}
                        Page 5: 404 Page Not Found
                      </Link>
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box className="SignInBottom">
          <Typography>Desgined By Hemil Rajpura</Typography>
        </Box>
      </Container>
    </div>
  );
};

export default PagesList;
