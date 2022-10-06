import { Container, Divider, List, Paper, useTheme } from "@mui/material";
import React from "react";
import { FormattedMessage } from "react-intl";
import {
  DialogEntry,
  EntryGroupType,
  GroupEntry,
  LinkEntry,
  ListEntry,
} from "./Entry";

function SettingsContainer({
  entryGroups: entry_groups,
}: {
  entryGroups: EntryGroupType;
}) {
  const theme = useTheme();
  theme.components?.MuiAppBar?.defaultProps;

  return (
    <Container sx={{ pt: 9, mt: -10, pl: 0, pr: 0, mb: 10 }}>
      <Paper elevation={2} sx={{ height: "120%" }}>
        <List sx={{ pt: 10, width: "100%", bgcolor: "transparent" }}>
          {Object.entries(entry_groups).map(([group_id, items], ind) => (
            <React.Fragment key={ind}>
              {ind !== 0 && <Divider variant="fullWidth" />}
              <GroupEntry title={<FormattedMessage id={group_id} />}>
                {items.map((item, ind) =>
                  item.href ? (
                    <LinkEntry item={item} key={ind} />
                  ) : item.dialog ? (
                    <DialogEntry item={item} key={ind} {...item.dialog} />
                  ) : (
                    <ListEntry item={item} key={ind} onClick={item.onClick} />
                  )
                )}
              </GroupEntry>
            </React.Fragment>
          ))}
        </List>
      </Paper>
    </Container>
  );
}

export default SettingsContainer;
