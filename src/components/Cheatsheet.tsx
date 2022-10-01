import React from "react";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Tiles from "../MahjongTiles";
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

type Props = {
  tabValue: number;
  handleTabChangeIndex: OnChangeIndexCallback;
};
interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

interface YakuType {
  name: string;
  han: number;
  fuuroHan: number;
  frequency: number;
  example: string;
  // open?: boolean;
  // setOpen?: Function;
}

const YAKUS: YakuType[] = [
  {
    name: "Tanyao",
    han: 1,
    fuuroHan: 1,
    frequency: 5,
    example: "234m 406m 678s 345p 88p",
  },
  {
    name: "Iipeikou",
    han: 1,
    fuuroHan: -1,
    frequency: 5,
    example: "234m 234m 234s 345p chun2",
  },
  {
    name: "Sanshoku Doujun",
    han: 2,
    fuuroHan: 1,
    frequency: 4,
    example: "234m 234s 234p 678p 8p2",
  },
];

function YakuListItem(yaku: YakuType) {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <Divider></Divider>
      <ListItemButton onClick={() => setOpen(!open)}>
        {/* <ListItemText primary={yaku.name} /> */}
        <Typography
          variant="button"
          sx={{ flexGrow: 1, color: "text.primary" }}
        >
          {yaku.name}
        </Typography>
        <Paper
          sx={{
            width: 40,
            height: 30,
            bgcolor: "primary.main",
            color: "primary.contrastText",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          elevation={2}
        >
          <Typography variant="button">{yaku.han}</Typography>
        </Paper>
      </ListItemButton>
      <Collapse in={open} timeout={50}>
        <Box display={"flex"}>
          <Typography></Typography>
          <Typography></Typography>
        </Box>
        <Box display={"flex"}>{Tiles(yaku.example)}</Box>
      </Collapse>
    </>
  );
}

function Yaku() {
  let hashmp: YakuType[][] = Array(14)
    .fill(0)
    .map(() => []);

  // Group yaku by han
  YAKUS.forEach((yaku) => {
    hashmp[yaku.han].push(yaku);
  });

  let cards = [];

  for (let i = 0; i != hashmp.length; i++) {
    const han = i;
    const yakus = hashmp[i];
    if (yakus.length == 0) {
      continue;
    }

    cards.push(
      <Card sx={{ mb: 2 }}>
        <List
          subheader={
            <ListSubheader component="div" id="nested-list-subheader">
              {`${han} Han`}
              {yakus.map(YakuListItem)}
            </ListSubheader>
          }
        ></List>
      </Card>
    );
  }

  return (
    <Container sx={{ display: "flex", flexDirection: "column", p: 0 }}>
      {cards}
    </Container>
  );
}

function Fu() {
  return <>Yaku</>;
}

function Home({ tabValue, handleTabChangeIndex }: Props) {
  return (
    <Box sx={{}}>
      <SwipeableViews index={tabValue} onChangeIndex={handleTabChangeIndex}>
        <TabPanel value={tabValue} index={0}>
          <Yaku />
        </TabPanel>
        <TabPanel value={tabValue} index={1}>
          <Fu />
        </TabPanel>
      </SwipeableViews>
    </Box>
  );
}

export default Home;
