/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
import { Box, useTheme } from "@mui/material";

// prettier-ignore
// '0m' means aka dora
export type TileStr =
    '1m' | '2m' | '3m' | '4m' | '5m' | '0m' | '6m' | '7m' | '8m' | '9m' |
    '1s' | '2s' | '3s' | '4s' | '5s' | '0s' | '6s' | '7s' | '8s' | '9s' |
    '1p' | '2p' | '3p' | '4p' | '5p' | '0p' | '6p' | '7p' | '8p' | '9p' |
    'ton' | 'nan' | 'shaa' | 'pei' | 'haku' | 'chun' | 'hatsu';

// prettier-ignore
export enum TileType {
    '1m' , '2m' , '3m' , '4m' , '5m' , '0m' , '6m' , '7m' , '8m' , '9m' ,
    '1s' , '2s' , '3s' , '4s' , '5s' , '0s' , '6s' , '7s' , '8s' , '9s' ,
    '1p' , '2p' , '3p' , '4p' , '5p' , '0p' , '6p' , '7p' , '8p' , '9p' ,
    'ton' , 'nan' , 'shaa' , 'pei' , 'haku' , 'chun' , 'hatsu',
}

type Props = {
  variant: TileType | TileStr;
  maxWidth?: number;
};

const innerSize = 0.8;

function Tile({ variant, maxWidth = 50 }: Props) {
  let variantString;
  if (typeof variant !== "string") {
    variantString = TileType[variant];
  } else {
    variantString = variant;
  }
  const offset = (maxWidth * (1 - innerSize)) / 2;
  const theme = useTheme();
  const color = theme.palette.mode === "light" ? "regular" : "black";
  return (
    <Box sx={{ maxWidth, position: "relative", ml: "1px" }}>
      <img
        src={`/tiles/${color}/front.svg`}
        alt="asdsad"
        style={{ width: "100%" }}
      />
      <img
        src={`/tiles/${color}/${variantString}.svg`}
        alt="asdsad"
        style={{
          width: `${100 * innerSize}%`,
          position: "absolute",
          left: 0,
          right: 0,
          top: 0,
          bottom: "9%",
          margin: "auto",
        }}
      />
    </Box>
  );
}

export default Tile;
