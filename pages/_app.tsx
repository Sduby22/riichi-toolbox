import "../styles/globals.css";
import type { AppProps } from "next/app";
import { NextPage } from "next";
import React from "react";
import { AppProvider } from "../src/providers/AppProvider";

export type NextApplicationPage<P = {}, IP = P> = NextPage<P, IP> & {
  layout?: (page: NextApplicationPage, props: any) => JSX.Element;
};

function MyApp(props: AppProps) {
  const { Component, pageProps } = props;
  const Component_: NextApplicationPage = Component;

  return (
    <AppProvider>
      {Component_.layout ? (
        Component_.layout(Component, pageProps)
      ) : (
        <Component {...pageProps} />
      )}
    </AppProvider>
  );
}

export default MyApp;
