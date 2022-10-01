
import React from "react";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Tiles from "../../MahjongTiles";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import SwipeableViews, { OnChangeIndexCallback } from "react-swipeable-views";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Collapse,
  Container,
  Divider,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Paper,
} from "@mui/material";
import { FormattedMessage } from "react-intl";

interface YakuType {
  name: string;
  han: number;
  meldedHan: number;
  frequency: number;
  example: string;
  // open?: boolean;
  // setOpen?: Function;
}

const YAKUS: YakuType[] = [
  {
    name: "tanyao",
    han: 1,
    meldedHan: 1,
    frequency: 5,
    example: "234m 406m 678s 345p 88p",
  },
  {
    name: "iipeikou",
    han: 1,
    meldedHan: -1,
    frequency: 5,
    example: "234m 234m 234s 345p chun2",
  },
  {
    name: "sanshoku",
    han: 2,
    meldedHan: 1,
    frequency: 4,
    example: "234m 234s 234p 678p 8p2",
  },
];

let hanMap: YakuType[][] = Array(14)
  .fill(0)
  .map(() => []);

// Group yaku by han
YAKUS.forEach((yaku) => {
  hanMap[yaku.han].push(yaku);
});

hanMap.forEach(yakus => yakus.sort((a, b) => b.frequency - a.frequency));

type CardProp = {
  children: React.ReactNode;
  bgcolor?: string;
  color?: string;
  sx?: any;
}

function MyCard({ children, bgcolor = "primary.main", color = "primary.contrastText", sx }: CardProp) {
  return (<Paper
    sx={{
      pl: 2,
      pr: 2,
      minWidth: 40,
      minHeight: 30,
      bgcolor,
      color,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      ...sx
    }}
    elevation={3}
  >
    <Typography variant="button">{children}</Typography>
  </Paper>);
}

type YakuListItemProp = {
  yaku: YakuType;
}

function YakuListItem({ yaku }: YakuListItemProp) {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <Divider></Divider>
      <ListItemButton onClick={() => setOpen(!open)}>
        <Typography variant="button" sx={{ flexGrow: 1 }}>
          <FormattedMessage id={`${yaku.name}.name`} />
        </Typography>

        {yaku.han === yaku.meldedHan + 1 &&
          <MyCard bgcolor="warning.main" color="warning.contrastText">
            <FormattedMessage id="yaku.meldedPenalty" defaultMessage="melded-" />
          </MyCard>}
        {yaku.meldedHan === -1 &&
          <MyCard bgcolor="success.main" color="success.contrastText">
            <FormattedMessage id="yaku.closedHandsOnly" defaultMessage="Closed" />
          </MyCard>}
        <MyCard sx={{ ml: 1 }}>
          {`${yaku.han}${yaku.han - 1 === yaku.meldedHan ? '-' : ''}`}
        </MyCard>
      </ListItemButton>
      <Collapse in={open} timeout={50}>
        <CardContent sx={{ pt: 1, pb: 1, display: 'flex' }}>
          <Typography sx={{ flexGrow: 1 }} variant="body2" color="text.secondary">
            <FormattedMessage id={`${yaku.name}.description`} />
          </Typography>
        </CardContent>
        <Box sx={{ display: "flex", m: 1, justifyContent: 'center' }}>{Tiles(yaku.example)}</Box>
      </Collapse>
    </>
  );
}

export default function Yaku() {

  return (
    <Container sx={{ display: "flex", flexDirection: "column", p: 0 }}>
      {Array.from(hanMap.entries()).filter(([_, yakus]) => yakus.length !== 0).map(([han, yakus]) => {
        return (
          <Card sx={{ mb: 2 }} key={han}>
            <List
              sx={{ pb: 0 }}
              subheader={
                <ListSubheader sx={{ bgcolor: "inherit" }}>
                  {`${han} `}
                  <FormattedMessage id="han" defaultMessage="Han" />
                </ListSubheader>
              }
            >
              {yakus.map(yaku => <YakuListItem key={yaku.name} yaku={yaku} />)}
            </List>
          </Card>
        )
      })}
    </Container>
  );
}