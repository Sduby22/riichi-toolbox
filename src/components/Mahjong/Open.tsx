import React from "react";
import DoubleTile from "./DoubleTile";
import Tile from "./Tile";
import { TileType } from "./utils";

type Variants = "l" | "m" | "r";

type Props = {
  tiles: TileType[];
  variant?: Variants | undefined;
};

export function Open({ tiles, variant }: Props) {
  const vari = React.useMemo(
    () => (variant ? variant : ["l", "m", "r"][Math.floor(Math.random() * 3)]),
    []
  );
  return tiles.length === 3 ? (
    <ChiPon tiles={tiles} variant={vari as Variants} />
  ) : (
    <Kan tiles={tiles} variant={vari as Variants} />
  );
}

function ChiPon({ tiles, variant }: Props) {
  const [l, m, r] = tiles;
  return (
    <>
      <Tile rotate={variant === "l"} tile={l} />
      <Tile rotate={variant === "m"} tile={m} />
      <Tile rotate={variant === "r"} tile={r} />
    </>
  );
}

function Kan({ tiles, variant }: Props) {
  const [l, m1, m2, r] = tiles;
  return (
    <>
      <Tile rotate={variant === "l"} tile={l} />
      {variant === "m" ? (
        <DoubleTile tiles={[m1, m2]} />
      ) : (
        <>
          <Tile rotate={false} tile={m1} />
          <Tile rotate={false} tile={m2} />
        </>
      )}

      <Tile rotate={variant === "r"} tile={r} />
    </>
  );
}
