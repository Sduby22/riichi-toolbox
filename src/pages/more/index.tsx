import { Info, Settings } from "@mui/icons-material";
import { FormattedMessage } from "react-intl";
import SettingsContainer, {
  EntryGroupType,
} from "../../components/SettingsContainer";
import Title from "../../components/Title";

const ENTRY_GROUPS: EntryGroupType = {
  "more.settings": [
    {
      primary: <FormattedMessage id="more.settings" />,
      icon: <Settings />,
      href: "settings",
    },
    {
      primary: <FormattedMessage id="more.info" />,
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
