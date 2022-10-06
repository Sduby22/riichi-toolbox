import enMessage from "../../lang/en.json";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import React, { useEffect, useState } from "react";
import { IntlProvider } from "react-intl";
import { useAppContext } from "./AppContext";
import { CssBaseline } from "@mui/material";

function getMessage(locale: string) {
  const lang = locale.split("-")[0];

  return fetch("/lang/" + lang + ".json").then((r) => r.json());
}

function AppShell({ children }: { children: React.ReactNode }) {
  return <AppProvider>{children}</AppProvider>;
}

function AppProvider({ children }: { children: React.ReactNode }) {
  const { state } = useAppContext();
  const [message, setMessage] = useState(enMessage as Record<string, string>);
  useEffect(() => {
    getMessage(state.locale).then((e) => {
      setMessage({
        ...enMessage,
        ...e,
      });
    });
  }, [state.locale]);

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: state.prefersDarkMode ? "dark" : "light",
        },
        typography: {
          fontFamily: "Roboto,Helvetica,Arial,Noto Sans SC,sans-serif",
        },
      }),
    [state.prefersDarkMode]
  );

  return (
    <IntlProvider
      locale={state.locale}
      defaultLocale="en-US"
      messages={message}
    >
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </IntlProvider>
  );
}

export default AppShell;
