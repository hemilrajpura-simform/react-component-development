import { Box, Typography } from "@mui/material";
import React from "react";
import SnowIcon from "../utils/images/Snow Icon.png";
import SnowLogo from "../utils/images/Snow Logo.png";

const HeaderNavBar = () => {
  return (
    <div className="HeaderNavBar">
      <Box className="NavBarItem">
        <img src={SnowIcon} alt="" style={{ width: "24px" }} />
        <img src={SnowLogo} alt="" style={{ width: "53px", height: "12px" }} />
      </Box>
      <Box className="NavBarItem">
        <Typography>Product</Typography>
        <Typography>Solutions</Typography>
        <Typography>Resources</Typography>
        <Typography>Download</Typography>
        <Typography>Pricing</Typography>
      </Box>
      <Box className="NavBarItem">
        <Typography>Sign In</Typography>
        <Typography
          style={{
            border: "1px solid rgba(255, 255, 255, 0.20)",
            borderRadius: "8px",
            padding: "4px 8px",
          }}
        >
          Login
        </Typography>
      </Box>
    </div>
  );
};

export default HeaderNavBar;
