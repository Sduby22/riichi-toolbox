import React from "react";
import { Hand } from "../Mahjong";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import yakujson from "./yakus.json";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import {
  Card,
  CardContent,
  Chip,
  Collapse,
  Container,
  Divider,
  List,
  ListItemButton,
  ListSubheader,
  NoSsr,
  Paper,
  SxProps,
} from "@mui/material";
import { FormattedMessage } from "react-intl";

interface YakuType {
  name: string;
  han: number;
  meldedHan: number;
  frequency: number;
  example: string;
}

const YAKUS = yakujson as YakuType[];

const hanMap: YakuType[][] = Array(27)
  .fill(0)
  .map(() => []);

const freqMap: YakuType[][] = Array(6)
  .fill(0)
  .map(() => []);

// Group yaku by han
YAKUS.forEach((yaku) => {
  hanMap[yaku.han].push(yaku);
});

// Group yaku by frequency
YAKUS.forEach((yaku) => {
  freqMap[yaku.frequency].push(yaku);
});

const HAN_PALETTE: { [key: number]: { bgcolor: string; color: string } } = {
  1: {
    bgcolor: "primary.main",
    color: "primary.contrastText",
  },
  2: {
    bgcolor: "primary.dark",
    color: "primary.contrastText",
  },
  3: {
    bgcolor: "secondary.main",
    color: "secondary.contrastText",
  },
  5: {
    bgcolor: "secondary.dark",
    color: "secondary.contrastText",
  },
  6: {
    bgcolor: "secondary.dark",
    color: "secondary.contrastText",
  },
  13: {
    bgcolor: "warning.light",
    color: "warning.contrastText",
  },
  26: {
    bgcolor: "warning.light",
    color: "warning.contrastText",
  },
};

hanMap.forEach((yakus) => yakus.sort((a, b) => b.frequency - a.frequency));
freqMap.forEach((yakus) => yakus.sort((a, b) => a.han - b.han));

type CardProp = {
  children: React.ReactNode;
  bgcolor?: string;
  color?: string;
  sx?: SxProps;
};

function MyCard({
  children,
  bgcolor = "primary.main",
  color = "primary.contrastText",
  sx,
}: CardProp) {
  return (
    <Paper
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
        ...sx,
      }}
      elevation={2}
    >
      <Typography variant="button">{children}</Typography>
    </Paper>
  );
}

type YakuListItemProp = {
  yaku: YakuType;
};

{
  /* The list item for each yaku */
}
function YakuListItem_({ yaku }: YakuListItemProp) {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <Divider></Divider>
      <ListItemButton onClick={() => setOpen(!open)}>
        <Typography variant="button" sx={{ flexGrow: 1 }}>
          <FormattedMessage id={`yaku.${yaku.name}.name`} />
        </Typography>

        {yaku.han === yaku.meldedHan + 1 && (
          <MyCard bgcolor="warning.main" color="warning.contrastText">
            <FormattedMessage
              id="yaku.meldedPenalty"
              defaultMessage="melded-"
            />
          </MyCard>
        )}
        {yaku.meldedHan === -1 && (
          <MyCard bgcolor="success.main" color="success.contrastText">
            <FormattedMessage
              id="yaku.closedHandsOnly"
              defaultMessage="Closed"
            />
          </MyCard>
        )}
        <MyCard
          sx={{ ml: 1, minWidth: 50 }}
          bgcolor={HAN_PALETTE[yaku.han].bgcolor}
          color={HAN_PALETTE[yaku.han].color}
        >
          {`${yaku.han > 12 ? Array(yaku.han / 13 + 1).join("★") : yaku.han}${
            yaku.han - 1 === yaku.meldedHan ? "-" : ""
          }`}
        </MyCard>
      </ListItemButton>
      <Collapse in={open}>
        <CardContent sx={{ pt: 1, pb: 1, display: "flex" }}>
          <Typography
            sx={{ flexGrow: 1 }}
            variant="body2"
            color="text.secondary"
          >
            <FormattedMessage id={`yaku.${yaku.name}.description`} />
          </Typography>
        </CardContent>
        {yaku.example && (
          <Box
            sx={{
              m: 1,
            }}
          >
            <NoSsr>
              <Hand tiles={yaku.example} waiting />
            </NoSsr>
          </Box>
        )}
      </Collapse>
    </>
  );
}

const YakuListItem = React.memo(YakuListItem_);

type SortChipProp = {
  sort: string;
  setSort: (sort: string) => void;
  rev: boolean;
  setRev: (rev: boolean) => void;
  defaultRev?: boolean;
  id: string;
  defaultMessage: string;
};

function SortChip({
  sort,
  setSort,
  rev,
  setRev,
  id,
  defaultMessage,
  defaultRev = false,
}: SortChipProp) {
  return (
    <Chip
      sx={{ ml: 1 }}
      label={
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <FormattedMessage id={id} defaultMessage={defaultMessage} />
          <Collapse
            sx={{ ml: "2px" }}
            in={sort === id}
            orientation="horizontal"
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <ArrowDownwardIcon
                fontSize="inherit"
                sx={{
                  transform: rev ? "rotate(0deg)" : "rotate(180deg)",
                  transition: "transform 0.2s",
                }}
              />
            </Box>
          </Collapse>
        </Box>
      }
      color="primary"
      onClick={() => {
        if (sort !== id) {
          setSort(id);
          setRev(defaultRev);
        } else {
          setRev(!rev);
        }
      }}
      variant={sort === id ? "filled" : "outlined"}
    />
  );
}

{
  /* Yaku page component */
}
function Yaku() {
  const [sort, setSort] = React.useState("han");
  const [rev, setRev] = React.useState(false);

  const currmap = sort === "han" ? hanMap : freqMap;

  return (
    <Container sx={{ display: "flex", flexDirection: "column", p: 0 }}>
      <Box
        sx={{
          mb: 2,
          display: "flex",
          justifyContent: "end",
          alignItems: "center",
        }}
      >
        {/* Sort By */}
        <Typography color="text.secondary" variant="subtitle2">
          <FormattedMessage id="sortby" defaultMessage="Sort By" />
        </Typography>
        <SortChip
          sort={sort}
          setSort={setSort}
          rev={rev}
          setRev={setRev}
          id="han"
          defaultMessage="Han"
        />
        <SortChip
          sort={sort}
          setSort={setSort}
          rev={rev}
          setRev={setRev}
          defaultRev={true}
          id="frequency"
          defaultMessage="Frequency"
        />
      </Box>
      {(rev
        ? Array.from(currmap.entries()).reverse()
        : Array.from(currmap.entries())
      )
        .filter(([_, yakus]) => yakus.length !== 0)
        .map(([ind, yakus]) => {
          return (
            <Card sx={{ mb: 2 }} key={ind} elevation={2}>
              <List
                sx={{ pb: 0 }}
                subheader={
                  sort === "han" ? (
                    <ListSubheader sx={{ bgcolor: "inherit" }}>
                      {ind < 13 ? (
                        <FormattedMessage
                          id="yaku.han"
                          defaultMessage="{han} Han"
                          values={{ han: ind }}
                        />
                      ) : ind === 26 ? (
                        <FormattedMessage
                          id="yaku.doubleYakuman"
                          defaultMessage="Double Yakuman"
                        />
                      ) : (
                        <FormattedMessage
                          id="yaku.yakuman"
                          defaultMessage="Yakuman"
                        />
                      )}
                    </ListSubheader>
                  ) : (
                    <ListSubheader sx={{ bgcolor: "inherit" }}>
                      <FormattedMessage
                        id={`yaku.frequency${ind}`}
                        defaultMessage={Array(ind + 1).join("★")}
                      />
                    </ListSubheader>
                  )
                }
              >
                {yakus.map((yaku) => (
                  <YakuListItem key={yaku.name} yaku={yaku} />
                ))}
              </List>
            </Card>
          );
        })}
    </Container>
  );
}

export default React.memo(Yaku);
