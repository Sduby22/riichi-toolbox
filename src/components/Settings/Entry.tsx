import {
  Box,
  Typography,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Dialogue from "./Dialogue";

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
  icon?: React.ReactNode;
  href?: string;
  onClick?: () => void;
  dialog?: {
    options: string[];
    onClose: (value?: number) => void;
    value: number;
  };
};

export function GroupEntry({ children, title }: EntryProp) {
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

export function LinkEntry({ item }: { item: EntryItem }): JSX.Element {
  const navigate = useNavigate();
  const cb = () => {
    navigate(item.href || "");
  };
  return <ListEntry item={item} onClick={cb} />;
}

export function ListEntry({
  item,
  onClick,
}: {
  item: EntryItem;
  onClick?: () => void;
}): JSX.Element {
  const padding = item.secondary ? 1 : 2;
  return (
    <ListItemButton sx={{ pt: padding, pb: padding }} onClick={onClick}>
      <ListItemIcon>{item.icon}</ListItemIcon>
      <ListItemText primary={item.primary} secondary={item.secondary} />
    </ListItemButton>
  );
}

export function DialogEntry({
  item,
  onClose,
  options,
  value,
}: { item: EntryItem } & EntryItem["dialog"]): JSX.Element {
  const [open, setOpen] = useState(false);

  return (
    <>
      <ListEntry item={item} onClick={() => setOpen(true)} />
      <Dialogue
        open={open}
        options={options}
        value={value}
        onClose={(value?: number) => {
          setOpen(false);
          onClose(value);
        }}
      />
    </>
  );
}
