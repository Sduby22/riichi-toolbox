import enMessage from "../../lang/en.json";
import useMediaQuery from "@mui/material/useMediaQuery";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import React, { useEffect, useReducer } from "react";
import { IntlProvider } from "react-intl";
import { ContextProvider } from "./AppContext";

function AppProvider({ children }: { children: React.ReactNode }) {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  let locale = "en-US";

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? "dark" : "light",
        },
      }),
    [prefersDarkMode]
  );

  const message = React.useMemo(() => {
    switch (locale) {
      default:
        return enMessage;
    }
  }, [locale]);

  useEffect(() => {
    locale = localStorage.getItem("locale") || navigator.language;
    console.log(1);
  });

  return (
    <IntlProvider locale={locale} messages={message}>
      <ThemeProvider theme={theme}>
        <ContextProvider>{children}</ContextProvider>
      </ThemeProvider>
    </IntlProvider>
  );
}

export { AppProvider };
