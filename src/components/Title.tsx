import Head from "next/head";
import { useEffect } from "react";
import { FormattedMessage, useIntl } from "react-intl";
import { useAppContext } from "../providers/AppContext";

export default function Title({ titleId }: { titleId: string }) {
  const { dispatch } = useAppContext();

  useEffect(() => {
    dispatch({ type: "set-title-message-id", payload: titleId });
  }, [titleId, dispatch]);

  const intl = useIntl();
  const title = intl.formatMessage({ id: titleId });

  return (
    <Head>
      <title>{title}</title>
    </Head>
  );
}
