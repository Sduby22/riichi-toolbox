import {
  Box,
  Container,
  Divider,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
  Typography,
  useTheme,
} from "@mui/material";
import React, { memo } from "react";
import { FormattedMessage } from "react-intl";
import { useNavigate } from "react-router-dom";

type EntryProp = {
  children: React.ReactNode;
  title: string | React.ReactNode;
};

export type EntryGroupType = {
  [key: string]: EntryItem[];
};

type EntryItem = {
  primary?: React.ReactNode;
  secondary?: React.ReactNode;
  icon: React.ReactNode;
  href?: string;
  onClick?: () => void;
};

function Entry({ children, title }: EntryProp) {
  return (
    <Box sx={{ pl: 1, pb: 2 }}>
      <Typography
        sx={{ ml: 9, mt: 1.5, mb: 1 }}
        color="primary"
        variant="subtitle2"
      >
        {title}
      </Typography>
      {children}
    </Box>
  );
}

function LinkEntry({ item }: { item: EntryItem }): JSX.Element {
  const navigate = useNavigate();
  item.onClick = () => {
    navigate(item.href || "");
  };
  return <ListEntry item={item} />;
}

function ListEntry({ item }: { item: EntryItem }): JSX.Element {
  return (
    <ListItemButton onClick={item.onClick}>
      <ListItemIcon>{item.icon}</ListItemIcon>
      <ListItemText primary={item.primary} secondary={item.secondary} />
    </ListItemButton>
  );
}

function SettingsContainer({
  entryGroups: entry_groups,
}: {
  entryGroups: EntryGroupType;
}) {
  const theme = useTheme();
  theme.components?.MuiAppBar?.defaultProps;

  return (
    <Container sx={{ pt: 10, mt: -10, pl: 0, pr: 0 }}>
      <Paper elevation={2} sx={{ height: "120%" }}>
        <List sx={{ pt: 10, width: "100%", bgcolor: "transparent" }}>
          {Object.entries(entry_groups).map(([group_id, items], ind) => (
            <React.Fragment key={ind}>
              {ind !== 0 && <Divider variant="fullWidth" />}
              <Entry title={<FormattedMessage id={group_id} />}>
                {items.map((item, ind) =>
                  item.href ? (
                    <LinkEntry item={item} key={ind} />
                  ) : (
                    <ListEntry item={item} key={ind} />
                  )
                )}
              </Entry>
            </React.Fragment>
          ))}
        </List>
      </Paper>
    </Container>
  );
}

export default memo(SettingsContainer);
