import type { AppProps } from "next/app";
import { NextPage } from "next";

export type NextApplicationPage<P = {}, IP = P> = NextPage<P, IP> & {
  layout?: (page: NextApplicationPage, props: any) => JSX.Element;
  tabbar?: () => JSX.Element;
};

export type NextAppProps = Omit<AppProps, "Component"> & {
  Component: NextApplicationPage;
};
