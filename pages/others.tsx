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
} from "@mui/material";
import { Info, Send, Settings } from "@mui/icons-material";
import React from "react";
import { FormattedMessage } from "react-intl";
import AppLayout from "../src/components/layout/AppLayout";
import Title from "../src/components/Title";

type Props = {};

type EntryProp = {
  children: React.ReactNode;
  title: string | React.ReactNode;
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
  return (
    <Container sx={{ pt: 10, mt: -10, mb: -10, pl: 0, pr: 0 }}>
      <Title title="Others" />
      <Paper elevation={2} sx={{ height: "120%" }}>
        <List sx={{ pt: 10, pb: 10, width: "100%", bgcolor: "transparent" }}>
          <Entry title="Placeholder">
            <ListItemButton>
              <ListItemIcon>
                <Send />
              </ListItemIcon>
              <ListItemText primary="Sent mail" secondary="asdasdsda" />
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon>
                <Send />
              </ListItemIcon>
              <ListItemText primary="Sent mail" />
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon>
                <Send />
              </ListItemIcon>
              <ListItemText primary="Sent mail" />
            </ListItemButton>
          </Entry>

          <Divider variant="fullWidth" />
          <Entry title="Placeholder">
            <ListItemButton>
              <ListItemIcon>
                <Send />
              </ListItemIcon>
              <ListItemText primary="Sent mail" secondary="asdasdsda" />
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon>
                <Send />
              </ListItemIcon>
              <ListItemText primary="Sent mail" />
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon>
                <Send />
              </ListItemIcon>
              <ListItemText primary="Sent mail" />
            </ListItemButton>
          </Entry>
          <Divider variant="fullWidth" />
          <Entry title="Placeholder">
            <ListItemButton>
              <ListItemIcon>
                <Send />
              </ListItemIcon>
              <ListItemText primary="Sent mail" secondary="asdasdsda" />
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon>
                <Send />
              </ListItemIcon>
              <ListItemText primary="Sent mail" />
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon>
                <Send />
              </ListItemIcon>
              <ListItemText primary="Sent mail" />
            </ListItemButton>
          </Entry>
          <Divider variant="fullWidth" />
          <Entry title="Placeholder">
            <ListItemButton>
              <ListItemIcon>
                <Send />
              </ListItemIcon>
              <ListItemText primary="Sent mail" secondary="asdasdsda" />
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon>
                <Send />
              </ListItemIcon>
              <ListItemText primary="Sent mail" />
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon>
                <Send />
              </ListItemIcon>
              <ListItemText primary="Sent mail" />
            </ListItemButton>
          </Entry>
          <Divider variant="fullWidth" />
          <Entry title="Placeholder">
            <ListItemButton>
              <ListItemIcon>
                <Send />
              </ListItemIcon>
              <ListItemText primary="Sent mail" secondary="asdasdsda" />
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon>
                <Send />
              </ListItemIcon>
              <ListItemText primary="Sent mail" />
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon>
                <Send />
              </ListItemIcon>
              <ListItemText primary="Sent mail" />
            </ListItemButton>
          </Entry>
          <Divider variant="fullWidth" />
          <Entry
            title={
              <FormattedMessage
                id="more.settings"
                defaultMessage={`Settings`}
              />
            }
          >
            <ListItemButton>
              <ListItemIcon>
                <Settings />
              </ListItemIcon>
              <ListItemText
                primary={
                  <FormattedMessage
                    id="more.settings"
                    defaultMessage={`Settings`}
                  />
                }
              />
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon>
                <Info />
              </ListItemIcon>
              <ListItemText
                primary={
                  <FormattedMessage id="more.info" defaultMessage={`Info`} />
                }
              />
            </ListItemButton>
          </Entry>
        </List>
      </Paper>
    </Container>
  );
}

Others.layout = AppLayout;
export default Others;
