import React from "react";
import { Open } from "./Open";
import Tile from "./Tile";
import parse_tile_str, { TileType } from "./utils";

type Props = {
  tiles: string;
};

export function Hand_({ tiles }: Props) {
  try {
    const [hand, open, wait] = parse_tile_str(tiles);
    return (
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "center",
          alignItems: "flex-end",
          gap: 2,
        }}
      >
        {/* Hand */}
        {hand
          .sort((a, b) => a - b)
          .map((t, i) => (
            <Tile key={i} tile={t} />
          ))}
        {open?.map((tiles, i) => (
          <React.Fragment key={i}>
            <div style={{ flexGrow: 0.3, maxWidth: 5 }}></div>
            <Open tiles={tiles} />
          </React.Fragment>
        ))}
        {wait && (
          <>
            <div style={{ flexGrow: 0.6, maxWidth: 5 }}></div>
            <Tile tile={wait} waiting={true} />
          </>
        )}
      </div>
    );
  } catch (e) {
    throw e;
  }
}

export const Hand = React.memo(Hand_);
