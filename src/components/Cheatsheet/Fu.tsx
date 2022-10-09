import React from "react";
import {
  Box,
  Card,
  CardContent,
  Collapse,
  Container,
  ListItemButton,
  Typography,
} from "@mui/material";
import { FormattedMessage } from "react-intl";
import { Hand } from "../Mahjong";

function ButtonCard({
  children,
  onClick,
}: {
  children: React.ReactNode[];
  onClick: () => void;
}) {
  return (
    <Card sx={{ width: "100%" }} elevation={2}>
      <ListItemButton onClick={onClick} sx={{ p: 0 }}>
        <CardContent sx={{ width: "100%" }}>{children}</CardContent>
      </ListItemButton>
    </Card>
  );
}

function Chiitoi() {
  const [open, setOpen] = React.useState(false);

  return (
    <ButtonCard onClick={() => setOpen(!open)}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="h6">
          1.
          <FormattedMessage
            id="cheatsheet.fu.special"
            defaultMessage="Special Case - Chiitoitsu"
          />
        </Typography>
        <Typography variant="button" fontSize="1rem">
          <FormattedMessage
            id="cheatsheet.fu.fu"
            defaultMessage="{fu} Fu"
            values={{ fu: 25 }}
          />
        </Typography>
      </div>

      <Collapse in={open}>
        <Box sx={{ pt: 2 }}>
          <Hand tiles="1199m 2266p 5544s ton2" />
          <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
            <FormattedMessage
              id="cheatsheet.fu.worth25fu"
              defaultMessage="Chiitoitsu is always worth 25 Fu."
            />
          </Typography>
        </Box>
      </Collapse>
    </ButtonCard>
  );
}

const GROUP_FU_SHOWCASES = [
  {
    header: (
      <FormattedMessage
        id="cheatsheet.fu.sequences"
        defaultMessage="Sequences"
      />
    ) as React.ReactNode,
    cases: [
      {
        hand: "567m",
        fu: <FormattedMessage id="cheatsheet.fu.fu" values={{ fu: 0 }} />,
      },
    ],
  },
  {
    header: (
      <FormattedMessage
        id="cheatsheet.fu.group.triplets"
        defaultMessage="Triplets"
      />
    ) as React.ReactNode,
    cases: [
      {
        hand: "|2s3",
        fu: <FormattedMessage id="cheatsheet.fu.group.openTriplet2" />,
      },
      {
        hand: "|2p4",
        fu: <FormattedMessage id="cheatsheet.fu.group.kanx4" />,
      },
      {
        hand: "2m3",
        fu: <FormattedMessage id="cheatsheet.fu.group.closedx2" />,
      },
      {
        hand: "shaa3",
        fu: <FormattedMessage id="cheatsheet.fu.group.19x2" />,
      },
    ],
  },
];

type ShowCaseType = typeof GROUP_FU_SHOWCASES[number];

function Case({ hand, fu }: ShowCaseType["cases"][number]) {
  return (
    <Box
      sx={{
        display: "flex",
        mb: 2,
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Box sx={{ flexGrow: 1 }}>
        {hand && (
          <Hand
            style={{
              justifyContent: "flex-start",
            }}
            maxWidth={40}
            tiles={hand}
            waiting
          />
        )}
      </Box>
      <Typography variant="button" fontSize="1rem">
        {fu}
      </Typography>
    </Box>
  );
}

function ShowCase({ header, cases }: ShowCaseType) {
  return (
    <>
      <Typography
        variant="subtitle2"
        color="text.secondary"
        sx={{ mt: 2, mb: 1 }}
      >
        {header}
      </Typography>
      {cases.map(({ hand, fu }, ind) => (
        <Case key={ind} hand={hand} fu={fu} />
      ))}
    </>
  );
}

function GroupFu() {
  const [open, setOpen] = React.useState(false);

  return (
    <ButtonCard onClick={() => setOpen(!open)}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="h6">
          2.
          <FormattedMessage
            id="cheatsheet.fu.groupfu"
            defaultMessage="Group Fu"
          />
        </Typography>
      </div>

      {GROUP_FU_SHOWCASES.map((showcase, ind) => (
        <ShowCase key={ind} {...showcase} />
      ))}

      <Collapse in={open}>
        <Box sx={{ pt: 2, gap: 2 }}>
          <Typography variant="subtitle2" color="text.secondary">
            <FormattedMessage
              id="cheatsheet.fu.examples"
              defaultMessage="Examples"
            />
          </Typography>

          <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 2 }}>
            <Box>
              <Case
                hand="9944m || 9m"
                fu={
                  <FormattedMessage id="cheatsheet.fu.fu" values={{ fu: 4 }} />
                }
              />
              <Typography variant="subtitle2">
                <FormattedMessage id="cheatsheet.fu.group.example1" />
              </Typography>
            </Box>
            <Box>
              <Case
                hand="hatsu4 | chun3"
                fu={
                  <FormattedMessage id="cheatsheet.fu.fu" values={{ fu: 36 }} />
                }
              />
              <Typography variant="subtitle2">
                <FormattedMessage id="cheatsheet.fu.group.example2" />
              </Typography>
              <Typography variant="subtitle2">
                <FormattedMessage id="cheatsheet.fu.group.example3" />
              </Typography>
            </Box>
          </Box>
        </Box>
      </Collapse>
    </ButtonCard>
  );
}

const PAIR_FU_SHOWCASES = [
  {
    header: <FormattedMessage id="cheatsheet.fu.pair.seatwind" />,
    cases: [
      {
        hand: "shaa2",
        fu: <FormattedMessage id="cheatsheet.fu.fu" values={{ fu: 2 }} />,
      },
    ],
  },
  {
    header: <FormattedMessage id="cheatsheet.fu.pair.dragon" />,
    cases: [
      {
        hand: "chun2",
        fu: <FormattedMessage id="cheatsheet.fu.fu" values={{ fu: 2 }} />,
      },
    ],
  },
  {
    header: <FormattedMessage id="cheatsheet.fu.pair.roundwind" />,
    cases: [
      {
        hand: "ton2",
        fu: <FormattedMessage id="cheatsheet.fu.fu" values={{ fu: 2 }} />,
      },
      {
        hand: "",
        fu: <FormattedMessage id="cheatsheet.fu.doublewind" />,
      },
    ],
  },
];

function PairFu() {
  const [open, setOpen] = React.useState(false);

  return (
    <ButtonCard onClick={() => setOpen(!open)}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="h6">
          3.
          <FormattedMessage
            id="cheatsheet.fu.pairfu"
            defaultMessage="Pair Fu"
          />
        </Typography>
      </div>

      {PAIR_FU_SHOWCASES.map((showcase, ind) => (
        <ShowCase key={ind} {...showcase} />
      ))}
    </ButtonCard>
  );
}

const WAIT_FU_SHOWCASES = [
  {
    header: <FormattedMessage id="cheatsheet.fu.wait.closed" />,
    cases: [
      {
        hand: "13m || 2m",
        fu: <FormattedMessage id="cheatsheet.fu.fu" values={{ fu: 2 }} />,
      },
    ],
  },
  {
    header: <FormattedMessage id="cheatsheet.fu.wait.pair" />,
    cases: [
      {
        hand: "6789m || 9m",
        fu: <FormattedMessage id="cheatsheet.fu.fu" values={{ fu: 2 }} />,
      },
    ],
  },
  {
    header: <FormattedMessage id="cheatsheet.fu.wait.oneside" />,
    cases: [
      {
        hand: "89m | |7m",
        fu: <FormattedMessage id="cheatsheet.fu.fu" values={{ fu: 2 }} />,
      },
    ],
  },
];

function WaitFu() {
  const [open, setOpen] = React.useState(false);

  return (
    <ButtonCard onClick={() => setOpen(!open)}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="h6">
          4.
          <FormattedMessage
            id="cheatsheet.fu.waitfu"
            defaultMessage="Wait Fu"
          />
        </Typography>
      </div>

      {WAIT_FU_SHOWCASES.map((showcase, ind) => (
        <ShowCase key={ind} {...showcase} />
      ))}
    </ButtonCard>
  );
}

function HandFu() {
  const [open, setOpen] = React.useState(false);

  return (
    <ButtonCard onClick={() => setOpen(!open)}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="h6">
          5.
          <FormattedMessage
            id="cheatsheet.fu.handfu"
            defaultMessage="Hand Fu"
          />
        </Typography>
      </div>

      <Typography>Base hand value: 20 Fu</Typography>

      {/* menzen */}
      <Box>
        <Typography
          variant="subtitle2"
          color="text.secondary"
          sx={{ mt: 2, mb: 1 }}
        >
          <FormattedMessage id="cheatsheet.fu.hand.closedhand" />
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="body1" color="text.primary" fontSize="1.1rem">
            <FormattedMessage id="tsumo" />
          </Typography>
          <Typography variant="button" color="text.primary" fontSize="1rem">
            <FormattedMessage id="cheatsheet.fu.hand.menzentsumo" />
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="body1" color="text.primary" fontSize="1.1rem">
            <FormattedMessage id="ron" />
          </Typography>
          <Typography variant="button" color="text.primary" fontSize="1rem">
            <FormattedMessage id="cheatsheet.fu.hand.menzenron" />
          </Typography>
        </Box>
      </Box>

      {/* melded */}
      <Box>
        <Typography
          variant="subtitle2"
          color="text.secondary"
          sx={{ mt: 2, mb: 1 }}
        >
          <FormattedMessage id="cheatsheet.fu.hand.open" />
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="body1" color="text.primary" fontSize="1.1rem">
            <FormattedMessage id="tsumo" />
          </Typography>
          <Typography variant="button" color="text.primary" fontSize="1rem">
            <FormattedMessage id="cheatsheet.fu.hand.opentsumo" />
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="body1" color="text.primary" fontSize="1.1rem">
            <FormattedMessage id="ron" />
          </Typography>
          <Typography variant="button" color="text.primary" fontSize="1rem">
            <FormattedMessage id="cheatsheet.fu.hand.openron" />
          </Typography>
        </Box>
      </Box>
    </ButtonCard>
  );
}

function RoundUpFu() {
  const [open, setOpen] = React.useState(false);

  return (
    <ButtonCard onClick={() => setOpen(!open)}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="h6">
          6.
          <FormattedMessage
            id="cheatsheet.fu.roundupfu"
            defaultMessage="Round Up"
          />
        </Typography>
      </div>

      <Box>
        <Typography
          variant="subtitle2"
          color="text.secondary"
          sx={{ mt: 2, mb: 1 }}
        >
          <FormattedMessage id="cheatsheet.fu.roundup.roundup" />
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography fontSize="1.3rem" fontWeight={500}>
            20 ➡︎ 20
          </Typography>
          <Typography fontSize="1.3rem" fontWeight={500}>
            22 ➡︎ 30
          </Typography>
          <Typography fontSize="1.3rem" fontWeight={500}>
            38 ➡︎ 40
          </Typography>
        </Box>
      </Box>
      <Box>
        <Typography
          variant="subtitle2"
          color="text.secondary"
          sx={{ mt: 2, mb: 1 }}
        >
          <FormattedMessage id="cheatsheet.fu.roundup.still20" />
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography>
            <div>
              <FormattedMessage id="cheatsheet.fu.roundup.still20.menzen" />
            </div>
            <div>
              <FormattedMessage id="cheatsheet.fu.roundup.still20.open" />
            </div>
          </Typography>
        </Box>
      </Box>
    </ButtonCard>
  );
}

export default function Fu() {
  return (
    <>
      <Container maxWidth="md">
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <Chiitoi />
          <GroupFu />
          <PairFu />
          <WaitFu />
          <HandFu />
          <RoundUpFu />
        </div>
      </Container>
    </>
  );
}
