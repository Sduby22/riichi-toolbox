import "../styles/globals.css";
import enMessage from '../lang/en.json';
import type { AppProps } from "next/app";
import useMediaQuery from "@mui/material/useMediaQuery";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import React, { useEffect } from "react";
import { IntlProvider } from "react-intl";

function MyApp({ Component, pageProps }: AppProps) {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  let locale = 'en-US';

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? "dark" : "light",
        },
      }),
    [prefersDarkMode]
  );

  const message = React.useMemo(
    () => {
      switch (locale) {
        default:
          return enMessage;
      }
    },
    [locale]
  );

  useEffect(() => {
    locale = localStorage.getItem('locale') || navigator.language;
    console.log(locale);
  })

  return (
    <IntlProvider locale={locale} messages={message}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </IntlProvider>
  );
}

export default MyApp;
