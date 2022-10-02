/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Box, Paper, useTheme } from "@mui/material";
import { grey } from "@mui/material/colors";

// prettier-ignore
// '0m' means aka dora
export type TileStr =
  '1m' | '2m' | '3m' | '4m' | '5m' | '0m' | '6m' | '7m' | '8m' | '9m' |
  '1s' | '2s' | '3s' | '4s' | '5s' | '0s' | '6s' | '7s' | '8s' | '9s' |
  '1p' | '2p' | '3p' | '4p' | '5p' | '0p' | '6p' | '7p' | '8p' | '9p' |
  'ton' | 'nan' | 'shaa' | 'pei' | 'haku' | 'chun' | 'hatsu';

// prettier-ignore
export enum TileType {
  '1m', '2m', '3m', '4m', '5m', '0m', '6m', '7m', '8m', '9m',
  '1s', '2s', '3s', '4s', '5s', '0s', '6s', '7s', '8s', '9s',
  '1p', '2p', '3p', '4p', '5p', '0p', '6p', '7p', '8p', '9p',
  'ton', 'nan', 'shaa', 'pei', 'haku', 'chun', 'hatsu',
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
  const theme = useTheme();
  const color = theme.palette.mode === "light" ? "regular" : "black";
  return (
    <div
      style={{
        marginLeft: "2px",
        width: "100%",
        maxWidth,
      }}
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          height: 0,
          paddingTop: "133.33%",
        }}
      >
        <Paper
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            display: "flex",
            bgcolor: color === "black" ? "#070707" : grey[100],
          }}
          elevation={2}
        >
          <img
            src={`/tiles/${color}/${variantString}.svg`}
            alt="asdsad"
            style={{
              width: `${100 * innerSize}%`,
              left: 0,
              right: 0,
              top: 0,
              bottom: 0,
              margin: "auto",
            }}
          />
        </Paper>
      </div>
    </div>
  );
}

export default Tile;
