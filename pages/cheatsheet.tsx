import React from "react";
import Box from "@mui/material/Box";
import SwipeableViews from "react-swipeable-views";
import Yaku from "../src/components/Cheatsheet/Yaku";
import Fu from "../src/components/Cheatsheet/Fu";
import { Tab, Tabs } from "@mui/material";
import { useAppContext } from "../src/providers/AppContext";
import AppLayout from "../src/components/layout/AppLayout";
import Title from "../src/components/Title";

interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
}

function TabPanel(props: TabPanelProps) {
  const { children } = props;

  return (
    <div>
      <Box sx={{ p: 3 }}>{children}</Box>
    </div>
  );
}

function Cheatsheet() {
  // return <div>sadsa</div>;
  const { state, dispatch } = useAppContext();

  return (
    <>
      <Title title="Cheatsheet" />
      <Box sx={{ mt: 13, mb: 7 }}>
        <SwipeableViews
          index={state.tabValue}
          onChangeIndex={(val, val2) => {
            dispatch({ type: "set-tabValue", payload: val });
          }}
        >
          <TabPanel>
            <Yaku />
          </TabPanel>
          <TabPanel>
            <Fu />
          </TabPanel>
        </SwipeableViews>
      </Box>
    </>
  );
}

Cheatsheet.layout = AppLayout;
function Tabbar() {
  const { state, dispatch } = useAppContext();

  return (
    <Tabs
      value={state.tabValue}
      onChange={(_, val) => {
        dispatch({ type: "set-tabValue", payload: val });
      }}
      indicatorColor="secondary"
      textColor="inherit"
      variant="fullWidth"
    >
      <Tab label="Yaku List" />
      <Tab label="Fu List" />
    </Tabs>
  );
}

Cheatsheet.tabbar = Tabbar;
export default Cheatsheet;
