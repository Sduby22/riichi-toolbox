import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import SwipeableViews from "react-swipeable-views";
import Yaku from "../components/Cheatsheet/Yaku";
import Fu from "../components/Cheatsheet/Fu";
import { Tab, Tabs } from "@mui/material";
import { useAppContext } from "../providers/AppContext";
import Title from "../components/Title";
import { FormattedMessage } from "react-intl";

interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
}

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
      <Tab
        label={
          <FormattedMessage id="yaku.yakuList" defaultMessage={"Yaku List"} />
        }
      />
      <Tab
        label={<FormattedMessage id="yaku.fuList" defaultMessage={"Fu List"} />}
      />
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

export default Cheatsheet;
