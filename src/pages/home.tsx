import { Box } from "@mui/material";
import React from "react";
import Title from "../components/Title";

export default function Home() {
  return (
    <>
      <Title titleId="title" />
      <Box sx={{ pt: 8 }}>Home</Box>
    </>
  );
}
