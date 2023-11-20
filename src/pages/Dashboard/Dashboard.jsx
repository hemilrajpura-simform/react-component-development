import React from "react";
import "./Dashboard.css";
import { Box, Container, Typography } from "@mui/material";
import ExpandableMenu from "../../components/ExpandableMenu";
import userImage from "../../utils/images/ByeWind.png";
import ExpandableMenuPages from "../../components/ExpandableMenuPages";
import FeaturedPlayListIcon from "@mui/icons-material/FeaturedPlayList";
import StarTwoToneIcon from "@mui/icons-material/StarTwoTone";
import LightModeTwoToneIcon from "@mui/icons-material/LightModeTwoTone";
import HistoryRoundedIcon from "@mui/icons-material/HistoryRounded";
import NotificationsNoneTwoToneIcon from "@mui/icons-material/NotificationsNoneTwoTone";
import BugReportOutlinedIcon from "@mui/icons-material/BugReportOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import SensorsOutlinedIcon from "@mui/icons-material/SensorsOutlined";
import Activity1 from "../../utils/images/1.png";
import Activity2 from "../../utils/images/2.png";
import Activity3 from "../../utils/images/3.png";
import Activity4 from "../../utils/images/4.png";

import BreadCrumb from "../../components/BreadCrumb";
import SearchInput from "../../components/SearchInput";
import MyProjects from "../../components/MyProjects";

const Dashboard = () => {
  return (
    <div id="Dashboard">
      <Container
        sx={{
          width: "100%",
          height: "100vh",
        }}
        maxWidth="xl"
      >
        <Box
          className="Dashboard-Section"
          sx={{
            width: "100%",
            height: "100%",
          }}
        >
          <Box className="DashBoard-LeftMenu">
            <Box className="LeftMenu-userDetails">
              <Box>
                <img src={userImage} alt="user" />
              </Box>
              <Box>
                <p>ByeWind</p>
              </Box>
            </Box>
            <Box className="LeftMenu-Labels">
              <p>Favories</p>
              <p>Recently</p>
            </Box>
            <Box className="LeftMenu-Bullets">
              <Typography component="div" className="bulletsList-item">
                <ul style={{ padding: "0 10px" }}>
                  <li>Overview</li>
                  <li>Projects</li>
                </ul>
              </Typography>
            </Box>
            <Box className="Dashboards-Section">
              <Typography>Dashboards</Typography>
              <ExpandableMenu />
            </Box>
            <Box className="Dashboards-Section">
              <Typography>Pages</Typography>
              <ExpandableMenuPages />
            </Box>
          </Box>
          <Box className="DashBoard-Main">
            <Box className="breadcrumbsSection">
              <Box
                className="breadcrumb-left"
                style={{ justifyContent: "start" }}
              >
                <Box className="breadcrumb-item-container">
                  <FeaturedPlayListIcon />
                  <StarTwoToneIcon />
                  <BreadCrumb />
                </Box>
              </Box>
              <Box
                className="breadcrumb-left"
                style={{ justifyContent: "end" }}
              >
                <Box className="breadcrumb-item-container">
                  <SearchInput />
                  <LightModeTwoToneIcon />
                  <HistoryRoundedIcon />
                  <NotificationsNoneTwoToneIcon />
                  <FeaturedPlayListIcon />
                </Box>
              </Box>
            </Box>
            <Box className="MyProject-section">
              <MyProjects />
            </Box>
          </Box>
          <Box className="DashBoard-RightMenu">
            <Box className="DashBoardRightMenu-container">
              <Box className="DashBoardRightMenu-section">
                <Typography>Notification</Typography>
                <Box className="DashboardSection-container">
                  {/* notification item */}
                  <Box className="dashboard-notifications">
                    <Box className="notification-icon">
                      <BugReportOutlinedIcon />
                    </Box>
                    <Box className="notification-title">
                      You have a bug that needs
                    </Box>
                  </Box>
                  {/* notification item */}
                  {/* notification item */}
                  <Box className="dashboard-notifications">
                    <Box className="notification-icon">
                      <PermIdentityOutlinedIcon />
                    </Box>
                    <Box className="notification-title"></Box>
                  </Box>
                  {/* notification item */}
                  {/* notification item */}
                  <Box className="dashboard-notifications">
                    <Box className="notification-icon">
                      <BugReportOutlinedIcon />
                    </Box>
                    <Box className="notification-title">
                      You have a bug that needs
                    </Box>
                  </Box>
                  {/* notification item */}
                  {/* notification item */}
                  <Box className="dashboard-notifications">
                    <Box className="notification-icon">
                      <SensorsOutlinedIcon />
                    </Box>
                    <Box className="notification-title"></Box>
                  </Box>
                  {/* notification item */}
                </Box>
              </Box>
              <Box className="DashBoardRightMenu-section">
                <Typography>Activities</Typography>
                <Box className="DashboardSection-container">
                  {/* notification item */}
                  <Box className="dashboard-notifications">
                    <Box className="notification-icon">
                      <img src={Activity1} alt="" />
                    </Box>
                  </Box>
                  {/* notification item */}
                  {/* notification item */}
                  <Box className="dashboard-notifications">
                    <Box className="notification-icon">
                      <img src={Activity2} alt="" />
                    </Box>
                    <Box className="notification-title"></Box>
                  </Box>
                  {/* notification item */}
                  {/* notification item */}
                  <Box className="dashboard-notifications">
                    <Box className="notification-icon">
                      <img src={Activity3} alt="" />
                    </Box>
                  </Box>
                  {/* notification item */}
                  {/* notification item */}
                  <Box className="dashboard-notifications">
                    <Box className="notification-icon">
                      <img src={Activity4} alt="" />
                    </Box>
                  </Box>
                  {/* notification item */}
                </Box>
              </Box>
              <Box className="DashBoardRightMenu-section">
                <Typography>Contacts</Typography>
                <Box className="DashboardSection-container">
                  {/* notification item */}
                  <Box className="dashboard-notifications">
                    <Box className="notification-icon">
                      <img src={Activity1} alt="" />
                    </Box>
                    <Box className="notification-title">Natali Craig</Box>
                  </Box>
                  {/* notification item */}
                  {/* notification item */}
                  <Box className="dashboard-notifications">
                    <Box className="notification-icon">
                      <img src={Activity2} alt="" />
                    </Box>
                    <Box className="notification-title">Drew Cano</Box>
                  </Box>
                  {/* notification item */}
                  {/* notification item */}
                  <Box className="dashboard-notifications">
                    <Box className="notification-icon">
                      <img src={Activity3} alt="" />
                    </Box>
                    <Box className="notification-title">Orlando Diggs</Box>
                  </Box>
                  {/* notification item */}
                  {/* notification item */}
                  <Box className="dashboard-notifications">
                    <Box className="notification-icon">
                      <img src={Activity4} alt="" />
                    </Box>
                    <Box className="notification-title">Andi Lane</Box>
                  </Box>
                  {/* notification item */}
                  {/* notification item */}
                  <Box className="dashboard-notifications">
                    <Box className="notification-icon">
                      <img src={Activity4} alt="" />
                    </Box>
                    <Box className="notification-title">Kate Morrison</Box>
                  </Box>
                  {/* notification item */}
                  {/* notification item */}
                  <Box className="dashboard-notifications">
                    <Box className="notification-icon">
                      <img src={Activity4} alt="" />
                    </Box>
                    <Box className="notification-title">Koray Okumus</Box>
                  </Box>
                  {/* notification item */}
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default Dashboard;
