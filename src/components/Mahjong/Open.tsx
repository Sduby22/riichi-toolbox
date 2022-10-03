import React from "react";
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
      <Tile rotate={variant === "l"} variant={l} />
      <Tile rotate={variant === "m"} variant={m} />
      <Tile rotate={variant === "r"} variant={r} />
    </>
  );
}

function Kan({ tiles, variant }: Props) {
  const [l, m1, m2, r] = tiles;
  return (
    <>
      <Tile rotate={variant === "l"} variant={l} />
      <Tile rotate={variant === "m"} kanmid={1} variant={m1} />
      <Tile rotate={variant === "m"} kanmid={2} variant={m2} />
      <Tile rotate={variant === "r"} variant={r} />
    </>
  );
}
