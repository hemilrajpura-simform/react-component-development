import React from "react";
import "./PageNotFound.css";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import NotFoundImage from "../../utils/images/pagenotfound.png";
import { Typography } from "@mui/material";
import HeaderNavBar from "../../components/HeaderNavBar";
import SignInBottom from "../../components/SignInBottom";

const PageNotFound = () => {
  return (
    <div className="DarkSignInSection">
      <CssBaseline />
      <HeaderNavBar />
      <Container>
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
              <Box className="PageNotFoundSection">
                <Box>
                  <img src={NotFoundImage} alt="" />
                </Box>
                <Typography
                  className="SignInForm-title"
                  style={{ margin: "16px 0 8px 0" }}
                >
                  404 Not Found
                </Typography>
                <Typography className="SignInForm-title2">
                  Sorry, we can’t find that page.
                </Typography>
                <Box>
                  <input
                    type="submit"
                    name="Back to Home Page"
                    placeholder="Back to Home Page"
                    value="Back to Home Page"
                  />
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

export default PageNotFound;
