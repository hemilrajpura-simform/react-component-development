import { Box, Typography } from "@mui/material";
import React from "react";
import HeartImage from "../utils/images/heartImage.png";

const ProjectItem = () => {
  return (
    <Box className="projectItem">
      <Box className="projectItem-container">
        <Box className="projectItem-title">
          <Box className="projectItem-left">
            <Typography>Coffee detail page</Typography>
            <Typography>Due Date: Jun 24, 2022</Typography>
          </Box>
          <Box className="projectItem-right">
            <img src={HeartImage} />
          </Box>
        </Box>
        <Box className="projectItem-user">
          <Box className="projectItem-left">
            <img src={HeartImage} />
          </Box>
          <Box className="projectItem-right">
            <Box className="projectItem-status" />
            <Typography>Completed</Typography>
          </Box>
        </Box>
        <Box className="projectItem-progress"></Box>
        <Box className="projectItem-title">
          <Box className="projectItem-left">
            <Typography>56 / 56 Total Tasks</Typography>
          </Box>
          <Box className="projectItem-right">
            <Typography>100%</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ProjectItem;
