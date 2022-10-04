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
import { Info, Send, Settings } from "@mui/icons-material";
import React from "react";
import { FormattedMessage, ReactIntlError } from "react-intl";
import AppLayout from "../../src/components/layout/AppLayout";
import Title from "../../src/components/Title";

type Props = {};

type EntryProp = {
  children: React.ReactNode;
  title: string | React.ReactNode;
};

type EntryItem = {
  primary: string;
  secondary?: string;
  icon: React.ReactNode;
  href: string;
};

const ENTRY_GROUPS: {
  [key: string]: EntryItem[];
} = {
  "others.settings": [
    {
      primary: "others.settings",
      icon: <Settings />,
      href: "/settings",
    },
    {
      primary: "others.info",
      icon: <Info />,
      href: "/info",
    },
  ],
  "others.setting1": [
    {
      primary: "others.settings",
      icon: <Settings />,
      href: "/settings",
    },
    {
      primary: "others.info",
      icon: <Info />,
      href: "/info",
    },
  ],
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

function Others({}: Props) {
  const theme = useTheme();
  theme.components?.MuiAppBar?.defaultProps


  return (
    <Container sx={{ pt: 10, mt: -10, pl: 0, pr: 0 }}>
      <Title title="Others" />
      <Paper elevation={2} sx={{ height: "120%" }}>
        <List sx={{ pt: 10, width: "100%", bgcolor: "transparent" }}>
          {Object.entries(ENTRY_GROUPS).map(([group_id, items], ind) => (
            <React.Fragment key={ind}>
              {ind !== 0 && <Divider variant="fullWidth" />}
              <Entry title={<FormattedMessage id={group_id} />}>
                {items.map((item, ind) => (
                  <ListItemButton key={ind}>
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText
                      primary={<FormattedMessage id={group_id} />}
                      secondary={
                        item.secondary && <FormattedMessage id={group_id} />
                      }
                    />
                  </ListItemButton>
                ))}
              </Entry>
            </React.Fragment>
          ))}
        </List>
      </Paper>
    </Container>
  );
}

Others.layout = AppLayout;
export default Others;
