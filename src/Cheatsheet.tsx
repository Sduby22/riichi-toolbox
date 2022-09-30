import React from "react";
import Tile from "./MahjongTile";

type Props = {};

export default function Cheatsheet({}: Props) {
  return (
    <div>
      <Tile variant="hatsu" width={50} />
    </div>
  );
}
