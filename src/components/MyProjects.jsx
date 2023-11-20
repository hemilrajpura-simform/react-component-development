import { Box, Typography } from "@mui/material";
import React from "react";
import ProjectItem from "./ProjectItem";
import EmptyProjectItem from "./EmptyProjectItem";
import FolderOpenOutlinedIcon from "@mui/icons-material/FolderOpenOutlined";
import LocalAtmOutlinedIcon from "@mui/icons-material/LocalAtmOutlined";
import Groups2OutlinedIcon from "@mui/icons-material/Groups2Outlined";

const MyProjects = () => {
  return (
    <div className="MyProject-Container">
      <Typography>My Projects</Typography>
      <Box className="Projects-Items">
        <EmptyProjectItem>
          <FolderOpenOutlinedIcon />
        </EmptyProjectItem>
        <EmptyProjectItem>
          <LocalAtmOutlinedIcon />
        </EmptyProjectItem>
        <EmptyProjectItem icon={FolderOpenOutlinedIcon}>
          <Groups2OutlinedIcon />
        </EmptyProjectItem>
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
      </Box>
    </div>
  );
};

export default MyProjects;
