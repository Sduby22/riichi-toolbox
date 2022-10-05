import { Box, Container, Paper } from "@mui/material";
import React, { useState } from "react";
import { Hand } from "../../components/Mahjong";
import Title from "../../components/Title";

function DiscardPage() {
  const [hover, setHover] = useState(-1);
  return (
    <Container sx={{ mt: 10 }}>
      <Title titleId="calculator.whichToDiscard.header" />
      <Paper sx={{ pt: 7 }}>
        <Box sx={{ pl: 1, pr: 1 }}>
          <Hand
            tiles="123m 456m 789m 3p2 56s | | 3p"
            onHover={setHover}
            value={hover}
          />
        </Box>
      </Paper>
    </Container>
  );
}

export default DiscardPage;
