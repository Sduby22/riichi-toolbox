import { Settings, Info } from "@mui/icons-material";
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
};

export default function Page() {
  return <SettingsContainer entryGroups={ENTRY_GROUPS} />;
}

Page.layout = AppLayout;
