import type { NextPage } from "next";
import Head from "next/head";
import {
  AppBar,
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Paper,
  Typography,
  Toolbar,
  IconButton,
  Drawer,
  Tabs,
  Tab,
  Collapse,
} from "@mui/material";

import DescriptionIcon from "@mui/icons-material/Description";
import HomeIcon from "@mui/icons-material/Home";
import CategoryIcon from "@mui/icons-material/Category";
import CalculateIcon from "@mui/icons-material/Calculate";
import MenuIcon from "@mui/icons-material/Menu";

import { useState } from "react";
import Cheatsheet from "../src/components/Cheatsheet";
import Others from "../src/components/Others";
import Home from "../src/components/Home";

let foo = 1;
const Page: NextPage = () => {
  const [navValue, setNavValue] = useState("Home");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [tabValue, setTabValue] = useState(0);

  const drawerWidth = 240;

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  const handleTabChangeIndex = (index: number) => {
    setTabValue(index);
  };

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  function a11yProps(index: number) {
    return {
      id: `full-width-tab-${index}`,
      "aria-controls": `full-width-tabpanel-${index}`,
    };
  }

  return (
    <>
      <Head>
        <title>Riichi Toolbox</title>
      </Head>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        {/* AppBar */}
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleDrawerToggle}
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              {navValue}
            </Typography>
          </Toolbar>

          <Collapse in={navValue === "Cheatsheet"} timeout={50}>
            <Tabs
              value={tabValue}
              onChange={handleTabChange}
              indicatorColor="secondary"
              textColor="inherit"
              variant="fullWidth"
            >
              <Tab label="Yaku List" {...a11yProps(0)} />
              <Tab label="Fu List" {...a11yProps(1)} />
            </Tabs>
          </Collapse>
        </AppBar>

        <Drawer
          variant="temporary"
          open={drawerOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        ></Drawer>

        {navValue === "Home" && <Home />}
        {navValue === "Cheatsheet" && (
          <Cheatsheet
            tabValue={tabValue}
            handleTabChangeIndex={handleTabChangeIndex}
          />
        )}
        {navValue === "Others" && <Others />}

        {/* bottom naviation bar */}
        <Box sx={{ display: "flex" }}>
          <Paper
            sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
            elevation={3}
          >
            <BottomNavigation
              value={navValue}
              onChange={(_, newValue) => {
                setNavValue(newValue);
                console.log(newValue);
              }}
            >
              <BottomNavigationAction
                value="Cheatsheet"
                label="Cheatsheet"
                icon={<DescriptionIcon />}
              />
              <BottomNavigationAction
                value="Calculator"
                label="Calculator"
                icon={<CalculateIcon />}
              />
              <BottomNavigationAction
                label="Home"
                value="Home"
                icon={<HomeIcon />}
              />
              <BottomNavigationAction
                value="Others"
                label="Others"
                icon={<CategoryIcon />}
              />
            </BottomNavigation>
          </Paper>
        </Box>
      </Box>
    </>
  );
};

export default Page;
