import { Attribution, Copyright, GitHub } from "@mui/icons-material";
import { FormattedMessage } from "react-intl";
import { EntryGroupType } from "../../components/Settings/Entry";
import SettingsContainer from "../../components/Settings/SettingsContainer";
import Title from "../../components/Title";

export default function Page() {
  const ENTRY_GROUPS: EntryGroupType = {
    "more.about": [
      {
        primary: <FormattedMessage id="more.about.projectPage" />,
        secondary: "github.com/Sduby22/riichi-toolbox",
        icon: <GitHub />,
        onClick: () => {
          window.open("https://github.com/Sduby22/riichi-toolbox");
        },
      },
      {
        primary: <FormattedMessage id="more.about.osslicense" />,
        secondary: "MIT",
        icon: <Copyright />,
      },
      {
        primary: <FormattedMessage id="more.about.attribution" />,
        icon: <Attribution />,
        href: "attribution",
      },
    ],
  };

  return (
    <>
      <Title titleId="more.about" />
      <SettingsContainer entryGroups={ENTRY_GROUPS} />
    </>
  );
}
