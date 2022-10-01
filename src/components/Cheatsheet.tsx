import React from "react";
import Tile from "./MahjongTileItem";
import Tiles from "../MahjongTiles";
import { Box } from "@mui/material";

type Props = {};

export default function Cheatsheet({}: Props) {
  return (
    <Box sx={{ display: "flex" }}>
      {/* <Tile variant="hatsu" width={50} /> */}
      {Tiles("112233m 123p 123s 99m")}
    </Box>
  );
}
