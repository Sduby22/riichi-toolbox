import { Info, Settings } from "@mui/icons-material";
import React from "react";
import AppLayout from "../../src/components/layout/AppLayout";
import SettingsContainer, {
  EntryGroupType,
} from "../../src/components/SettingsContainer";

const ENTRY_GROUPS: EntryGroupType = {
  "others.settings": [
    {
      primary: "others.settings",
      icon: <Settings />,
      href: "/settings",
    },
    {
      primary: "others.info",
      icon: <Info />,
      href: "/info",
    },
  ],
  "others.setting1": [
    {
      primary: "others.settings",
      icon: <Settings />,
      href: "/settings",
    },
    {
      primary: "others.info",
      icon: <Info />,
      href: "/info",
    },
  ],
};

function Others() {
  return <SettingsContainer entryGroups={ENTRY_GROUPS} />;
}

Others.layout = AppLayout;
export default Others;
