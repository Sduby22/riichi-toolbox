import { memo, PureComponent } from "react";
import { DoubleTile } from "./DoubleTile";
import Tile from "./Tile";
import { TileType } from "./utils";

type Variants = "l" | "m" | "r" | "closed";

type Props = {
  tiles: TileType[];
  maxWidth?: number;
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
      <ChiPon
        maxWidth={this.props.maxWidth}
        tiles={tiles}
        variant={this.vari as Variants}
      />
    ) : (
      <Kan
        maxWidth={this.props.maxWidth}
        tiles={tiles}
        variant={this.vari as Variants}
      />
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
        <Tile
          maxWidth={this.props.maxWidth}
          rotate={this.props.variant === "l"}
          tile={l}
        />
        <Tile
          maxWidth={this.props.maxWidth}
          rotate={this.props.variant === "m"}
          tile={m}
        />
        <Tile
          maxWidth={this.props.maxWidth}
          rotate={this.props.variant === "r"}
          tile={r}
        />
      </>
    );
  }
}

type KanProps = Props;
class Kan extends PureComponent<KanProps> {
  render() {
    const { tiles, variant } = this.props;
    const [l, m1, m2, r] = tiles;
    return (
      <>
        <Tile
          maxWidth={this.props.maxWidth}
          rotate={variant === "l"}
          tile={closed ? "haku" : l}
        />
        {variant === "m" ? (
          <DoubleTile maxWidth={this.props.maxWidth} tiles={[m1, m2]} />
        ) : (
          <>
            <Tile maxWidth={this.props.maxWidth} rotate={false} tile={m1} />
            <Tile maxWidth={this.props.maxWidth} rotate={false} tile={m2} />
          </>
        )}

        <Tile
          maxWidth={this.props.maxWidth}
          rotate={variant === "r"}
          tile={closed ? "haku" : l}
        />
      </>
    );
  }
}
