import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import SwipeableViews from "react-swipeable-views";
import Yaku from "../components/Cheatsheet/Yaku";
import Fu from "../components/Cheatsheet/Fu";
import Scoring from "../components/Cheatsheet/Scoring";
import { Tab, Tabs } from "@mui/material";
import { useAppContext } from "../providers/AppContext";
import Title from "../components/Title";
import { FormattedMessage } from "react-intl";

interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
}

const TABS = [
  {
    labelId: "cheatsheet.yakuList",
    component: <Yaku />,
  },
  {
    labelId: "cheatsheet.fuList",
    component: <Fu />,
  },
  {
    labelId: "cheatsheet.scoring",
    component: <Scoring />,
  },
];

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
      {TABS.map((tab, i) => (
        <Tab key={i} label={<FormattedMessage id={tab.labelId} />} />
      ))}
    </Tabs>
  );
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
  const { state, dispatch } = useAppContext();
  useEffect(() => {
    dispatch({ type: "set-tabbar", payload: <Tabbar /> });

    return () => {
      dispatch({ type: "set-tabbar", payload: <></> });
    };
  }, []);

  return (
    <>
      <Title titleId="nav.cheatsheet" />
      <Box sx={{ mt: 13, mb: 7 }}>
        <SwipeableViews
          index={state.tabValue}
          onChangeIndex={(val, _) => {
            dispatch({ type: "set-tabValue", payload: val });
          }}
        >
          {TABS.map((tab, i) => (
            <TabPanel key={i}>{tab.component}</TabPanel>
          ))}
        </SwipeableViews>
      </Box>
    </>
  );
}

export default Cheatsheet;
