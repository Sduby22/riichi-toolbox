/* eslint-disable @next/next/no-img-element */
import React from "react";
import { TileType, TileStr } from "./utils";
import { Box, Paper, useTheme } from "@mui/material";
import { grey, red } from "@mui/material/colors";

type Props = {
  variant: TileType | TileStr;
  maxWidth?: number;
  style?: React.CSSProperties;
  rotate?: boolean;
  kanmid?: number;
  waiting?: boolean;
};

const innerSize = 0.8;
const palette = {
  regular: {
    waiting: "#ffe0e0",
    // waiting: red[50],
    normal: grey[100],
  },
  black: {
    waiting: "#690000",
    normal: "#070707",
  },
};

function Tile({
  variant,
  maxWidth = 50,
  style = {},
  rotate = false,
  kanmid = 0,
  waiting = false,
}: Props) {
  let variantString;
  if (typeof variant !== "string") {
    variantString = TileType[variant];
  } else {
    variantString = variant;
  }
  const theme = useTheme();
  const color = theme.palette.mode === "light" ? "regular" : "black";

  const widthMul = kanmid ? 0.6667 : 1.3333;
  const flexGrow = kanmid ? 2 : 4;
  const inWidth = kanmid ? "150%" : "75%";
  const moveBase = kanmid ? 0 : -125;
  return (
    <div
      style={{
        ...style,
        maxWidth: rotate ? maxWidth * widthMul : maxWidth,
        transform: rotate
          ? `rotate(90deg) translateX(${moveBase - 150 * (kanmid - 1)}%)
            ${kanmid ? `translateY(${-80.5 + 53 * kanmid}%)` : ""}
          `
          : "",
        flexGrow: rotate ? flexGrow : 3,
      }}
    >
      <div
        style={{
          width: rotate ? inWidth : "100%",
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
              // bgcolor: color === "black" ? "#070707" : grey[100],
              bgcolor: waiting ? palette[color].waiting : palette[color].normal,
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
    </div>
  );
}

export default Tile;
