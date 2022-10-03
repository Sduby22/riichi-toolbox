import React from "react";
import { Props as TileProps, Tile } from "./Tile";

type Props = {
  tiles: TileProps["tile"][];
  maxWidth?: number;
  style?: React.CSSProperties;
};

export default function DoubleTile({ tiles, maxWidth, style }: Props) {
  return (
    <div style={{ flexGrow: 4 }}>
      <Tile
        tile={tiles[0]}
        rotate={true}
        maxWidth={maxWidth}
        style={{ marginBottom: 2 }}
      />
      <Tile tile={tiles[1]} rotate={true} maxWidth={maxWidth} />
    </div>
  );
}
