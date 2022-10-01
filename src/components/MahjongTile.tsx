/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
import { Box, useTheme } from "@mui/material";

// prettier-ignore
// '0m' means aka dora
type Props = {
    variant:
    '1m' | '2m' | '3m' | '4m' | '5m' | '0m' | '6m' | '7m' | '8m' | '9m' |
    '1s' | '2s' | '3s' | '4s' | '5s' | '0s' | '6s' | '7s' | '8s' | '9s' |
    '1p' | '2p' | '3p' | '4p' | '5p' | '0p' | '6p' | '7p' | '8p' | '9p' |
    'ton' | 'nan' | 'shaa' | 'pei' | 'haku' | 'chun' | 'hatsu';
    width?: number;
};

const innerSize = 0.8;

function Tile({ variant, width = 50 }: Props) {
  const offset = (width * (1 - innerSize)) / 2;
  const theme = useTheme();
  const color = theme.palette.mode === "light" ? "regular" : "black";
  return (
    <Box sx={{ width, position: "absolute" }}>
      <img src={`/tiles/${color}/front.svg`} alt="asdsad" width={width} />
      <img
        src={`/tiles/${color}/${variant}.svg`}
        alt="asdsad"
        width={width * innerSize}
        style={{ position: "absolute", left: offset, top: offset * 1.33 }}
      />
    </Box>
  );
}

export default Tile;
