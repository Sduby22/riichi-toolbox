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
  const [value, setValue] = useState("Home");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const drawerWidth = 240;

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

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
              News
            </Typography>
          </Toolbar>
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

        <Box sx={{ display: "flex", flexGrow: 1, p: 3 }}>
          {value === "Home" && <Home />}
          {value === "Cheatsheet" && <Cheatsheet />}
          {value === "Others" && <Others />}
        </Box>

        {/* bottom naviation bar */}
        <Box sx={{ display: "flex" }}>
          <Paper
            sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
            elevation={3}
          >
            <BottomNavigation
              value={value}
              onChange={(_, newValue) => {
                setValue(newValue);
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
