import React from "react";
import styles from "./SignIn.module.css";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import snowLogo from "../../utils/images/Snow Logo.png";
import snowIcon from "../../utils/images/Vector.png";
import googleIcon from "../../utils/images/Google.png";
import appleIcon from "../../utils/images/Apple.png";

import { Typography } from "@mui/material";
const SignIn = () => {
  return (
    <div className={styles.SignInSection}>
      <CssBaseline />
      <Container
        style={{ height: "100% " }}
        sx={{
          width: "100%",
          height: "100%",
        }}
      >
        <Box
          className={styles.SignInMainSection}
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignContent: "center",
            alignItems: "center",
          }}
        >
          <Box className={styles.SignInMain} sx={{ width: "50%" }}>
            <Box className={styles.SignInleft}>
              <img src={snowIcon} alt="snow Icon" />
              <img
                src={snowLogo}
                alt="snow logo"
                style={{ marginLeft: "20px" }}
              />
            </Box>
          </Box>
          <Box
            className={styles.SignInMain}
            sx={{ width: "50%", height: "100%" }}
          >
            <Box className={styles.SignInright}>
              <Box className={styles.SignInFormsection}>
                <Box className={styles.SignInForm}>
                  <Box className={styles.SignInFormTitleSection}>
                    <Typography className={styles.SignInFormtitle}>
                      Sign In
                    </Typography>
                    <Typography className={styles.SignInFormtitle2}>
                      Your Social Campaigns
                    </Typography>
                  </Box>
                  <Box className={styles.SignInFormmethod}>
                    <Box className={styles.SignInFormmethodItem}>
                      <img src={googleIcon} alt="icon" />
                      <Typography>Sign In with Google</Typography>
                    </Box>
                    <Box className={styles.SignInFormmethodItem}>
                      <img src={appleIcon} alt="icon" />
                      <Typography>Sign In with Apple</Typography>
                    </Box>
                  </Box>
                  <Box className={styles.SignInMailsection}>
                    <hr className={styles.SignInMailline} />
                    <Box
                      className={styles.SignInFormorEmail}
                      sx={{ width: "100%", textAlign: "center" }}
                    >
                      <hr className={styles.SignInMailline} />
                      <Typography> Or with Email</Typography>
                    </Box>
                  </Box>
                  <Box className={styles.SignInFormInputs}>
                    <Box className={styles.SignInFormInput}>
                      <input placeholder="Email" />
                    </Box>
                    <Box className={styles.SignInFormInput}>
                      <input placeholder="Pasword" />
                    </Box>
                    <Box className={styles.SignInFormforgotPassword}>
                      <Typography>Forgot Password?</Typography>
                    </Box>
                  </Box>
                  <Box className={styles.SignInFormSubmit}>
                    <input
                      type="submit"
                      name="Sign In"
                      placeholder="Sign In"
                      value="Sign In"
                    />
                  </Box>
                  <Box className={styles.SignInFormnotMember}>
                    <Typography>
                      Not a Member yet?
                      <span className={styles.SignInFormsignUpButton}>
                        Sign Up
                      </span>
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default SignIn;
