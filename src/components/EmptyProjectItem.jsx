import { Box } from "@mui/material";
import React from "react";

const EmptyProjectItem = ({ children }) => {
  return (
    <Box id="EmptyProjectItem" className="projectItem">
      <Box className="projectItem-container">
        <Box className="emptyProject-icon">{children}</Box>
      </Box>
    </Box>
  );
};

export default EmptyProjectItem;
