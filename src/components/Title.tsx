import { useEffect } from "react";
import { useIntl } from "react-intl";
import { useAppContext } from "../providers/AppContext";

export default function Title({ titleId }: { titleId: string }) {
  const { dispatch } = useAppContext();
  const intl = useIntl();
  const title = intl.formatMessage({ id: titleId });

  useEffect(() => {
    dispatch({ type: "set-title-message-id", payload: titleId });
    document.title = title;
  }, [titleId, dispatch]);

  return null;
}
