import { TileType } from "./components/MahjongTileItem";
import Tile from "./components/MahjongTileItem";

// 5m2 means 2 tiles of 5m
// 12567m means 1m 2m 5m 6m 7m
// 23m2 is illegal
// chun2 is 2 tiles of chun
// 2chun is illegal
const TILE_PATTERN = /(\d*)([a-z]+)(\d*)/;
const VALID_TILES = [
  "m",
  "s",
  "p",
  "chun",
  "ton",
  "nan",
  "shaa",
  "pei",
  "haku",
  "hatsu",
];

enum ParseTileErrorType {
  PATTERN_FAILED,
  TILE_NOT_FOUND,
  HONOR_WITH_NUM,
  MULTIPLE_NUM_WITH_COUNT,
}

class ParseTileError extends Error {
  type: ParseTileErrorType;
  num: string;
  tile: string;
  count: string;

  constructor(
    type: ParseTileErrorType,
    num: string,
    tile: string,
    count: string
  ) {
    super(ParseTileErrorType[type]);
    this.type = type;
    this.num = num;
    this.tile = tile;
    this.count = count;
  }
}

function parseTileSeg(tileseg: string): TileType[] {
  const match = tileseg.match(TILE_PATTERN);
  if (match === null) {
    throw new ParseTileError(ParseTileErrorType.PATTERN_FAILED, "", "", "");
  }
  const [, num, tile, count] = match;
  let tileIndex = VALID_TILES.indexOf(tile);
  if (tileIndex === -1) {
    throw new ParseTileError(
      ParseTileErrorType.TILE_NOT_FOUND,
      num,
      tile,
      count
    );
  } else if (tileIndex > 2 && num !== "") {
    throw new ParseTileError(
      ParseTileErrorType.HONOR_WITH_NUM,
      num,
      tile,
      count
    );
  } else if (num.length > 1 && count !== "") {
    throw new ParseTileError(
      ParseTileErrorType.MULTIPLE_NUM_WITH_COUNT,
      num,
      tile,
      count
    );
  }

  if (num.length === 0) {
    return Array(count.length > 0 ? parseInt(count) : 1).fill(
      TileType[tile as keyof typeof TileType]
    );
  } else {
    return num
      .split("")
      .map((n) => {
        const tilestr = `${n}${tile}` as keyof typeof TileType;
        const tiletype: TileType = TileType[tilestr];
        return Array(count.length > 0 ? parseInt(count) : 1).fill(tiletype);
      })
      .flat();
  }
}

function tileSort(a: TileType, b: TileType) {
  return a - b;
}

function parseTiles(tiles: string, maxWidth: number) {
  const tiles_segs = tiles.replace(/,/g, " ").split(/\s+/);
  try {
    const tiles = tiles_segs.map((seg) => parseTileSeg(seg)).flat();
    tiles.sort(tileSort);
    return tiles.map((t, ind) => (
      <Tile variant={t} maxWidth={maxWidth} key={ind} />
    ));
  } catch (e) {
    if (e instanceof ParseTileError) {
      console.log(e.tile);
    }
    throw e;
  }
}

export default function MahjongTiles(tiles: string, maxWidth: number = 50) {
  return parseTiles(tiles, maxWidth);
}
