// 5m2 means 2 tiles of 5m
// 12567m means 1m 2m 5m 6m 7m
// 23m2 is illegal
// chun2 is 2 tiles of chun

import assert from "assert";

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

// prettier-ignore
export enum TileType {
  '1m', '2m', '3m', '4m', '5m', '0m', '6m', '7m', '8m', '9m',
  '1s', '2s', '3s', '4s', '5s', '0s', '6s', '7s', '8s', '9s',
  '1p', '2p', '3p', '4p', '5p', '0p', '6p', '7p', '8p', '9p',
  'ton', 'nan', 'shaa', 'pei', 'haku', 'chun', 'hatsu',
}

// prettier-ignore
// '0m' means aka dora
export type TileStr = keyof typeof TileType;

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

// parse segs 123m to [1m, 2m, 3m]
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
      TileType[tile as TileStr]
    );
  } else {
    return num
      .split("")
      .map((n) => {
        const tilestr = `${n}${tile}` as TileStr;
        const tiletype: TileType = TileType[tilestr];
        return Array(count.length > 0 ? parseInt(count) : 1).fill(tiletype);
      })
      .flat();
  }
}

class mahjongTilesError extends Error {
  type: string;
  tiles: string;

  constructor(type: string, tiles: string) {
    super(type);
    this.type = type;
    this.tiles = tiles;
  }
}

export default function parse_tile_str(
  tiles: string
): [hand: TileType[], open: TileType[][] | null, wait: TileType | null] {
  const str_chunks = tiles.split("|");
  if (str_chunks.length > 3) {
    throw new mahjongTilesError("too many chunks", tiles);
  }

  let tile_chunk = str_chunks.map((chunk) =>
    chunk
      .replace(/,/g, " ")
      .split(/\s+/)
      .filter((s) => s.length > 0)
      .map((seg) => parseTileSeg(seg))
  );

  //  hand                           open                          wait
  // [[[1m, 2m, 3m], [3m, 4m, 5m]], [[1m, 2m, 3m], [3m, 4m, 5m]], [[1m]]]
  assert(tile_chunk.length > 0);
  assert(
    tile_chunk.length < 3 ||
      (tile_chunk[2].length === 1 && tile_chunk[2][0].length === 1)
  );
  return [
    tile_chunk[0].flat(),
    tile_chunk[1] || null,
    (tile_chunk[2] && tile_chunk[2][0] && tile_chunk[2][0][0]) || null,
  ];
}
