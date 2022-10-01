import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import {
  AppBar,
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Paper,
  Typography,
} from "@mui/material";

import CasinoIcon from "@mui/icons-material/Casino";
import DescriptionIcon from "@mui/icons-material/Description";
import HomeIcon from "@mui/icons-material/Home";
import CategoryIcon from "@mui/icons-material/Category";
import CalculateIcon from "@mui/icons-material/Calculate";

import { useState } from "react";
import Cheatsheet from "../src/Cheatsheet";
import Others from "../src/Others";
import Home from "../src/Home";

let foo = 1;
const Page: NextPage = () => {
  const [value, setValue] = useState("Home");

  return (
    <>
      <Head>
        <title>Riichi Toolbox</title>
      </Head>

      {value === "Home" && <Home />}
      {value === "Cheatsheet" && <Cheatsheet />}
      {value === "Others" && <Others />}

      {/* bottom naviation bar */}
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
    </>
  );
};

export default Page;
