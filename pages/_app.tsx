import "../styles/globals.css";
import React from "react";
import { AppProvider } from "../src/providers/AppProvider";
import type { NextAppProps } from "../src/AppTypes";
import { ContextProvider } from "../src/providers/AppContext";

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
    <ContextProvider>
      <AppProvider>
        <AppShell {...props} />
      </AppProvider>
    </ContextProvider>
  );
}

export default MyApp;
