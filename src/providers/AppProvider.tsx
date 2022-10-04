import enMessage from "../../lang/en.json";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import React from "react";
import { IntlProvider } from "react-intl";
import { useAppContext } from "./AppContext";
import { CssBaseline } from "@mui/material";

const messages: {
  [key: string]: {};
} = {
  ["en"]: enMessage,
};

function getMessage(locale: string) {
  const lang = locale.split("-")[0];
  if (lang in messages) {
    return messages[lang];
  } else {
    return enMessage;
  }
}

function AppProvider({ children }: { children: React.ReactNode }) {
  const { state, dispatch } = useAppContext();

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: state.prefersDarkMode ? "dark" : "light",
        },
      }),
    [state.prefersDarkMode]
  );

  return (
    <IntlProvider
      locale={state.locale}
      defaultLocale="en-US"
      messages={getMessage(state.locale)}
    >
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </IntlProvider>
  );
}

export { AppProvider };
