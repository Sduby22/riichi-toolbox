import { DarkMode, Language } from "@mui/icons-material";
import { useMediaQuery } from "@mui/material";
import { FormattedMessage } from "react-intl";
import { EntryGroupType } from "../../components/Settings/Entry";
import SettingsContainer from "../../components/Settings/SettingsContainer";
import Title from "../../components/Title";
import { useAppContext } from "../../providers/AppContext";
import { getTranslationOrSelf } from "../../providers/AppProvider";

const labels = ["more.settings.lang.auto", "中文(简体)", "English", "日本語"];
const locales = [undefined, "zh-CN", "en-US", "ja-JP"];

export default function SettingsPage() {
  const { dispatch } = useAppContext();

  const handleLangClose = (val?: number) => {
    if (val !== undefined) {
      const locale = locales[val];
      dispatch({ type: "set-locale", payload: locale });
      if (locale) {
        localStorage.setItem("locale", locale);
      } else {
        localStorage.removeItem("locale");
      }
    }
  };

  const [langInd, langStr] = getLang(localStorage.getItem("locale"));

  function getLang(locale: string | null): [number, string] {
    if (locale) {
      for (const [i, val] of locales.entries()) {
        if (val === undefined) continue;
        if (val.startsWith(locale.split("-")[0])) {
          return [i, labels[i]];
        }
      }
    }
    return [0, "English"];
  }

  const darkModeLabels = [
    "more.settings.darkmode.auto",
    "more.settings.darkmode.enable",
    "more.settings.darkmode.disable",
  ];

  const darkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const handleDarkModeClose = (val?: number) => {
    switch (val) {
      case 0:
        dispatch({ type: "set-darkMode", payload: darkMode });
        localStorage.removeItem("darkMode");
        break;
      case 1:
        dispatch({ type: "set-darkMode", payload: true });
        localStorage.setItem("darkMode", "dark");
        break;
      case 2:
        dispatch({ type: "set-darkMode", payload: false });
        localStorage.setItem("darkMode", "light");
        break;
    }
  };

  const currDark = (() => {
    switch (localStorage.getItem("darkMode")) {
      case null:
        return 0;
      case "dark":
        return 1;
      case "light":
        return 2;
      default:
        return -1;
    }
  })();

  const ENTRY_GROUPS: EntryGroupType = {
    "more.settings": [
      {
        primary: <FormattedMessage id="more.settings.lang" />,
        secondary: `${langStr}`,
        icon: <Language />,
        dialog: {
          onClose: handleLangClose,
          options: labels.map((x) => getTranslationOrSelf(x)),
          value: langInd,
        },
      },
      {
        primary: <FormattedMessage id="more.settings.darkmode" />,
        secondary: <FormattedMessage id={darkModeLabels[currDark]} />,
        icon: <DarkMode />,
        dialog: {
          onClose: handleDarkModeClose,
          options: darkModeLabels.map((x) => getTranslationOrSelf(x)),
          value: currDark,
        },
      },
    ],
  };

  return (
    <>
      <Title titleId="more.settings" />
      <SettingsContainer entryGroups={ENTRY_GROUPS} />
    </>
  );
}
