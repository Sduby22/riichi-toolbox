import { Info, Settings } from "@mui/icons-material";
import SettingsContainer, {
  EntryGroupType,
} from "../../components/SettingsContainer";
import Title from "../../components/Title";

const ENTRY_GROUPS: EntryGroupType = {
  "more.settings": [
    {
      primary: "more.settings",
      icon: <Settings />,
      href: "settings",
    },
    {
      primary: "more.info",
      icon: <Info />,
      href: "info",
    },
  ],
  "more.setting1": [
    {
      primary: "more.settings",
      icon: <Settings />,
      href: "settings",
    },
    {
      primary: "more.info",
      icon: <Info />,
      href: "info",
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

export default More;
