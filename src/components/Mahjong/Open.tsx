import { memo, PureComponent } from "react";
import { DoubleTile } from "./DoubleTile";
import Tile from "./Tile";
import { TileType } from "./utils";

type Variants = "l" | "m" | "r";

type Props = {
  tiles: TileType[];
  variant?: Variants | undefined;
};

export default class Open extends PureComponent<Props> {
  vari: string;
  constructor(props: Props) {
    super(props);
    this.vari = props.variant
      ? props.variant
      : ["l", "m", "r"][Math.floor(Math.random() * 3)];
  }
  render() {
    const { tiles } = this.props;
    return tiles.length === 3 ? (
      <ChiPon tiles={tiles} variant={this.vari as Variants} />
    ) : (
      <Kan tiles={tiles} variant={this.vari as Variants} />
    );
  }
}

const open = memo(Open);
export { open as Open };

class ChiPon extends PureComponent<Props> {
  render() {
    const [l, m, r] = this.props.tiles;
    return (
      <>
        <Tile rotate={this.props.variant === "l"} tile={l} />
        <Tile rotate={this.props.variant === "m"} tile={m} />
        <Tile rotate={this.props.variant === "r"} tile={r} />
      </>
    );
  }
}

class Kan extends PureComponent<Props> {
  render() {
    const { tiles, variant } = this.props;
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
}
