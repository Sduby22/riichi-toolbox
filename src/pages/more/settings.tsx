import { Settings, Info } from "@mui/icons-material";
import SettingsContainer, {
  EntryGroupType,
} from "../../components/SettingsContainer";

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
};

export default function SettingsPage() {
  return <SettingsContainer entryGroups={ENTRY_GROUPS} />;
}
