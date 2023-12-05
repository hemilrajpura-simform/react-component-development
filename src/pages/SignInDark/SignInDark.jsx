import React from "react";
import styles from "./SingInDark.module.css";
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
    <div className={styles.DarkSignInSection}>
      <CssBaseline />
      <HeaderNavBar />
      <Container
        sx={{
          width: "100%",
          height: "100%",
        }}
      >
        <Box
          className={styles.SignInMain_Section}
          sx={{
            width: "100%",
            height: "85vh",
            display: "flex",
            alignContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            className={styles.SignInMain}
            sx={{ width: "100%", height: "100%" }}
          >
            <Box className={styles.SignIn_right}>
              <Box className={styles.SignInForm_section}>
                <Box className={styles.SignInForm}>
                  <Box className={styles.SignInForm_TitleSection}>
                    <Typography className={styles.SignInForm_title}>
                      Sign In
                    </Typography>
                    <Typography className={styles.SignInForm_title2}>
                      Your Social Campaigns
                    </Typography>
                  </Box>
                  <Box className={styles.SignInForm_method}>
                    <Box className={styles.SignInForm_methodItem}>
                      <img src={googleIcon} alt="icon" />
                      <Typography>Sign In with Google</Typography>
                    </Box>
                    <Box className={styles.SignInForm_methodItem}>
                      <img src={appleIcon} alt="icon" />
                      <Typography>Sign In with Apple</Typography>
                    </Box>
                  </Box>
                  <Box className={styles.SignInMail_section}>
                    <hr className={styles.SignInMail_line} />
                    <Box
                      className={styles.SignInForm_orEmail}
                      sx={{ width: "100%", textAlign: "center" }}
                    >
                      <hr className={styles.SignInMail_line} />
                      <Typography> Or with Email</Typography>
                    </Box>
                  </Box>
                  <Box className={styles.SignInForm_Inputs}>
                    <Box className={styles.SignInForm_Input}>
                      <input placeholder="Email" />
                    </Box>
                    <Box className={styles.SignInForm_Input}>
                      <input placeholder="Pasword" />
                    </Box>
                    <Box className={styles.SignInForm_forgotPassword}>
                      <Typography>Forgot Password?</Typography>
                    </Box>
                  </Box>
                  <Box className={styles.SignInForm_Submit}>
                    <input
                      type="submit"
                      name="Sign In"
                      placeholder="Sign In"
                      value="Sign In"
                    />
                  </Box>
                  <Box className={styles.SignInForm_notMember}>
                    <Typography>
                      Not a Member yet?
                      <span className={styles.SignInForm_signUpButton}>
                        {" "}
                        Sign Up
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

export default SignInDark;
