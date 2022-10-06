import { Language } from "@mui/icons-material";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Radio,
  DialogActions,
  Button,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useState } from "react";
import { FormattedMessage } from "react-intl";
import SettingsContainer, {
  EntryGroupType,
} from "../../components/SettingsContainer";
import Title from "../../components/Title";
import { useAppContext } from "../../providers/AppContext";
import { getTranslationOrSelf } from "../../providers/AppProvider";

const LANGUAGES: Record<string, string | undefined> = {
  "中文(简体)": "zh-CN",
  English: "en-US",
  日本語: "ja-JP",
};

export default function SettingsPage() {
  const { state, dispatch } = useAppContext();
  const [langOpen, setLangOpen] = useState(false);

  const handleLangOpen = () => {
    setLangOpen(true);
  };

  const handleLangClose = (val?: string) => {
    setLangOpen(false);

    if (val) {
      const locale = LANGUAGES[val];
      dispatch({ type: "set-locale", payload: locale });
      if (locale) {
        localStorage.setItem("locale", locale);
      } else {
        localStorage.removeItem("locale");
      }
    }
  };

  const auto = getTranslationOrSelf("more.settings.lang.auto");
  LANGUAGES[auto] = undefined;
  let currlang;
  if (localStorage.getItem("locale") === null) {
    currlang = auto;
  } else {
    currlang = getLangString(state.locale);
  }

  const ENTRY_GROUPS: EntryGroupType = {
    "more.settings": [
      {
        primary: <FormattedMessage id="more.settings.lang" />,
        secondary: `${
          currlang === auto ? getLangString(state.locale) : currlang
        }`,
        icon: <Language />,
        onClick: handleLangOpen,
      },
    ],
  };

  function getLangString(locale: string) {
    for (const key in LANGUAGES) {
      const val = LANGUAGES[key];
      if (val === undefined) continue;
      if (val.startsWith(locale.split("-")[0])) {
        return key;
      }
    }
    return "English";
  }

  return (
    <>
      <Title titleId="more.settings" />
      <SettingsContainer entryGroups={ENTRY_GROUPS} />;
      <LangDialogue
        options={Object.keys(LANGUAGES)}
        open={langOpen}
        onClose={handleLangClose}
        value={currlang}
      />
    </>
  );
}

type LangDialogueProps = {
  open: boolean;
  onClose: (value?: string) => void;
  value: string;
  options: string[];
};

function LangDialogue({
  open,
  onClose,
  value: valueProp,
  options,
}: LangDialogueProps) {
  const [value, setValue] = useState(valueProp);

  return (
    <Dialog
      sx={{ "& .MuiDialog-paper": { width: "80%" } }}
      maxWidth="xs"
      // TransitionProps={{ onEntering: handleEntering }}
      open={open}
      // {...other}
    >
      <DialogTitle>
        <FormattedMessage id="more.settings.lang" />
      </DialogTitle>
      <DialogContent
        sx={{
          p: 0,
        }}
      >
        <List>
          {options.map((option) => (
            <ListItem key={option} sx={{ pt: 0, pb: 0 }}>
              <ListItemButton
                sx={{ pt: 1, pb: 1 }}
                onClick={(_) => setValue(option)}
              >
                <ListItemIcon>
                  <Radio checked={option === value} />
                </ListItemIcon>
                <ListItemText primary={option} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </DialogContent>
      <DialogActions>
        <Button
          autoFocus
          onClick={() => {
            onClose();
            setValue(valueProp);
          }}
        >
          Cancel
        </Button>
        <Button
          onClick={() => {
            onClose(value);
          }}
        >
          Ok
        </Button>
      </DialogActions>
    </Dialog>
  );
}
