import "../styles/globals.css";
import React from "react";
import { AppProvider } from "../src/providers/AppProvider";
import type { NextAppProps } from "../src/AppTypes";

function AppShell(props: NextAppProps) {
  const { Component, pageProps } = props;

  return (
    <>
      {Component.layout ? (
        Component.layout(Component, pageProps)
      ) : (
        <Component {...pageProps} />
      )}
    </>
  );
}

function MyApp(props: NextAppProps) {
  return (
    <AppProvider>
      <AppShell {...props} />
    </AppProvider>
  );
}

export default MyApp;
