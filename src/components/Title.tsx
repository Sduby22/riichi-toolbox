import Head from "next/head";
import { useEffect } from "react";
import { useAppContext } from "../providers/AppContext";

export default function Title({ title }: { title: string }) {
  const { dispatch } = useAppContext();

  useEffect(() => {
    dispatch({ type: "set-title", payload: title });
  }, [title, dispatch]);

  return (
    <Head>
      <title>{title}</title>
    </Head>
  );
}
