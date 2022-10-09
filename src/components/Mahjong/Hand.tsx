import React from "react";
import { Open } from "./Open";
import Tile from "./Tile";
import parse_tile_str from "./utils";

type Props = {
  tiles: string;
  waiting?: boolean;
  value?: number;
  maxWidth?: number;
  style?: React.CSSProperties;
  onHover?: (ind: number) => void;
};

export function Hand_({
  tiles,
  value = -1,
  waiting = false,
  onHover,
  maxWidth,
  style,
}: Props) {
  const [hand, open, wait] = parse_tile_str(tiles);

  const onMouseOver = (ind: number) => {
    if (onHover === undefined) return undefined;
    return () => {
      onHover(ind);
    };
  };

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        justifyContent: "center",
        alignItems: "flex-end",
        gap: 2,
        ...style,
      }}
    >
      {/* Hand */}
      {hand
        .sort((a, b) => a - b)
        .map((t, i) => (
          <Tile
            maxWidth={maxWidth}
            hover={value === i}
            key={i}
            tile={t}
            onMouseOver={onMouseOver(i)}
            onMouseLeave={onMouseOver(-1)}
          />
        ))}

      {open?.map((tiles, i) => (
        <React.Fragment key={i}>
          {(i !== 0 || hand.length !== 0) && (
            <div style={{ flexGrow: 0.3, maxWidth: 5 }}></div>
          )}
          <Open tiles={tiles} maxWidth={maxWidth} />
        </React.Fragment>
      ))}

      {wait && (
        <>
          <div style={{ flexGrow: 0.6, maxWidth: 5 }}></div>
          <Tile
            hover={value === hand.length}
            maxWidth={maxWidth}
            tile={wait}
            waiting={waiting}
            onMouseOver={onMouseOver(hand.length)}
            onMouseLeave={onMouseOver(-1)}
          />
        </>
      )}
    </div>
  );
}

export const Hand = React.memo(Hand_);
