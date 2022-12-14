import React from "react";
import { TileType, TileStr } from "./utils";
import { Paper, useTheme } from "@mui/material";
import { grey } from "@mui/material/colors";

export type Props = {
  tile: TileType | TileStr;
  maxWidth?: number;
  style?: React.CSSProperties;
  rotate?: boolean;
  waiting?: boolean;
  hover?: boolean;
  onMouseOver?: (e: React.MouseEvent) => void;
  onMouseLeave?: (e: React.MouseEvent) => void;
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

export function Tile({
  tile: variant,
  maxWidth = 50,
  style = {},
  rotate = false,
  waiting = false,
  hover = false,
  onMouseOver,
  onMouseLeave,
}: Props) {
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
        ...style,
        maxWidth: (rotate ? 1.3333 : 1) * maxWidth,
        flexGrow: rotate ? 4 : 3,
      }}
      onMouseOver={onMouseOver}
      onMouseLeave={onMouseLeave}
    >
      <div
        style={{
          width: "100%",
          transform: hover ? " translateY(-50%)" : "",
          transition: "transform cubic-bezier(0.4, 0, 0.2, 1) 0.1s",
        }}
      >
        <div
          style={{
            position: "relative",
            width: "100%",
            height: 0,
            paddingTop: rotate ? "75%" : "133.33%",
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
                transform: rotate ? `rotate(90deg) translateX(0%) ` : "",
                width: `${100 * innerSize * (rotate ? 0.75 : 1)}%`,
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                margin: "auto",
                shapeRendering: "optimizeSpeed",
              }}
            />
          </Paper>
        </div>
      </div>
    </div>
  );
}

export default React.memo(Tile);
