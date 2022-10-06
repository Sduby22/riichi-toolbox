import {
  Dialog,
  DialogTitle,
  DialogContent,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Radio,
  ListItemText,
  DialogActions,
  Button,
} from "@mui/material";
import { useState } from "react";
import { FormattedMessage } from "react-intl";

export type DialogueProps = {
  open: boolean;
  onClose: (value?: number) => void;
  value: number;
  options: string[];
};

export default function Dialogue({
  open,
  onClose,
  value: valueProp,
  options,
}: DialogueProps) {
  const [value, setValue] = useState(valueProp);

  return (
    <Dialog
      sx={{ "& .MuiDialog-paper": { width: "80%" } }}
      maxWidth="xs"
      // TransitionProps={{ onEntering: handleEntering }}
      open={open}
      // {...other}
    >
      <DialogTitle>
        <FormattedMessage id="more.settings.lang" />
      </DialogTitle>
      <DialogContent
        sx={{
          p: 0,
        }}
      >
        <List sx={{ p: 0 }}>
          {options.map((option, i) => (
            <ListItem key={option} sx={{ pt: 0, pb: 0 }}>
              <ListItemButton
                sx={{ pt: 1, pb: 1 }}
                onClick={(_) => setValue(i)}
              >
                <ListItemIcon>
                  <Radio checked={i === value} />
                </ListItemIcon>
                <ListItemText primary={option} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </DialogContent>
      <DialogActions>
        <Button
          autoFocus
          onClick={() => {
            onClose();
            setValue(valueProp);
          }}
        >
          Cancel
        </Button>
        <Button
          onClick={() => {
            onClose(value);
          }}
        >
          Ok
        </Button>
      </DialogActions>
    </Dialog>
  );
}
