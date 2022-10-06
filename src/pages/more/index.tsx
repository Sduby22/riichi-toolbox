import { Fastfood, Info, Settings, Translate } from "@mui/icons-material";
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
      primary: <FormattedMessage id="more.about" />,
      icon: <Info />,
      href: "info",
    },
  ],
  "more.supportme": [
    {
      primary: <FormattedMessage id="more.contributeTranslationTitle" />,
      secondary: <FormattedMessage id="more.contributeTranslationDesc" />,
      icon: <Translate />,
      onClick: () => {
        open("https://crowdin.com/project/riichi-toolbox");
      },
    },
    {
      primary: <FormattedMessage id="more.donation" />,
      icon: <Fastfood />,
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
