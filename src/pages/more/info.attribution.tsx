import { Brush } from "@mui/icons-material";
import React from "react";
import SettingsContainer, {
  EntryGroupType,
} from "../../components/SettingsContainer";
import Title from "../../components/Title";

const ATTR: EntryGroupType = {
  "more.about.attribution": [
    {
      primary: "riichi-mahjong-tiles @FluffyStuff ",
      secondary: "Creative Commons Attribution 4.0 International License",
      icon: <Brush />,
      onClick: () => {
        window.open("https://github.com/FluffyStuff/riichi-mahjong-tiles");
      },
    },
  ],
};

export default function AttributionPage() {
  return (
    <>
      <Title titleId="more.about.attribution" />
      <SettingsContainer entryGroups={ATTR} />
    </>
  );
}
