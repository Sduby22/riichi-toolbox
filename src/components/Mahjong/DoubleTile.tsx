import React, { memo } from "react";
import { Props as TileProps, Tile } from "./Tile";

type Props = {
  tiles: TileProps["tile"][];
  maxWidth?: number;
};

function DoubleTile_({ tiles, maxWidth = 50 }: Props) {
  return (
    <div style={{ flexGrow: 4, maxWidth: maxWidth * 1.333 }}>
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

// export function as pure component named DoubleTile
export const DoubleTile = memo(DoubleTile_);
