import { Menu } from "@mui/icons-material";
import {
  Slide,
  useScrollTrigger,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Collapse,
} from "@mui/material";
import { FormattedMessage } from "react-intl";
import { useAppContext } from "../../providers/AppContext";

export default function AppToolBar({ tabbar }: { tabbar?: () => JSX.Element }) {
  const { state, dispatch } = useAppContext();
  const handleDrawerToggle = () => {
    dispatch({ type: "toggle-drawer" });
  };

  return (
    <Slide appear={false} direction="down" in={!useScrollTrigger({})}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleDrawerToggle}
            sx={{ mr: 2 }}
          >
            <Menu />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <FormattedMessage id={state.titleMessageId} />
          </Typography>
        </Toolbar>

        <Collapse in={tabbar !== undefined} timeout={50}>
          {tabbar && tabbar()}
        </Collapse>
      </AppBar>
    </Slide>
  );
}
