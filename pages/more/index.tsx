import { Info, Settings } from "@mui/icons-material";
import Head from "next/head";
import React from "react";
import { FormattedMessage } from "react-intl";
import AppLayout from "../../src/components/layout/AppLayout";
import SettingsContainer, {
  EntryGroupType,
} from "../../src/components/SettingsContainer";
import Title from "../../src/components/Title";

const ENTRY_GROUPS: EntryGroupType = {
  "more.settings": [
    {
      primary: "more.settings",
      icon: <Settings />,
      href: "/settings",
    },
    {
      primary: "more.info",
      icon: <Info />,
      href: "/info",
    },
  ],
  "more.setting1": [
    {
      primary: "more.settings",
      icon: <Settings />,
      href: "/settings",
    },
    {
      primary: "more.info",
      icon: <Info />,
      href: "/info",
    },
  ],
};

function More() {
  return (
    <>
      <Title titleId="nav.more" />
      <SettingsContainer entryGroups={ENTRY_GROUPS} />
    </>
  );
}

More.layout = AppLayout;
export default More;
