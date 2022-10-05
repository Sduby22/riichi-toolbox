import {
  DescriptionOutlined,
  CalculateOutlined,
  HomeOutlined,
  CategoryOutlined,
  Home,
  Calculate,
  Description,
  Category,
} from "@mui/icons-material";
import {
  Box,
  Drawer,
  Paper,
  BottomNavigation,
  BottomNavigationAction,
} from "@mui/material";
import ToggleIcon from "material-ui-toggle-icon";
import { useAppContext } from "../../providers/AppContext";
import AppToolBar from "./AppToolBar";
import { useEffect, useState } from "react";
import Title from "../Title";
import { FormattedMessage } from "react-intl";
import { useLocation, useNavigate, Outlet } from "react-router-dom";

const navItems = [
  {
    id: "nav.cheatsheet",
    onIcon: <Description />,
    offIcon: <DescriptionOutlined />,
    href: "/cheatsheet",
  },
  {
    id: "nav.calculator",
    onIcon: <Calculate />,
    offIcon: <CalculateOutlined />,
    href: "/calculator",
  },
  {
    id: "nav.home",
    onIcon: <Home />,
    offIcon: <HomeOutlined />,
    href: "/home",
  },
  {
    id: "nav.more",
    onIcon: <Category />,
    offIcon: <CategoryOutlined />,
    href: "/more",
  },
];

function getSelected(path: string, paths: string[]) {
  for (let i = 0; i < paths.length; i++) {
    if (path.startsWith(paths[i])) {
      return i;
    }
  }

  return -1;
}

export default function AppLayout() {
  const { state, dispatch } = useAppContext();
  const [selected, setSelected] = useState(-1);
  const loc = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const currSelected = getSelected(
      loc.pathname,
      navItems.map((item) => item.href)
    );

    if (currSelected !== -1) {
      setSelected(currSelected);
    }
  }, [loc.pathname]);

  const handleDrawerToggle = () => {
    dispatch({ type: "toggle-drawer" });
  };

  return (
    <>
      <Title titleId="title" />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        {/* AppBar */}
        <AppToolBar tabbar={state.tabbar} />
        <Drawer
          variant="temporary"
          open={state.drawerOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: state.drawerWidth,
            },
          }}
        ></Drawer>

        <Outlet />

        {/* bottom naviation bar */}
        <Paper
          sx={{ zIndex: 999, position: "fixed", bottom: 0, left: 0, right: 0 }}
          elevation={2}
        >
          <BottomNavigation
            value={selected}
            onChange={(_, val) => {
              if (val !== selected) {
                setSelected(selected);
                navigate(navItems[val].href);
              }
            }}
          >
            {navItems.map((item, i) => (
              <BottomNavigationAction
                key={i}
                label={<FormattedMessage id={item.id} />}
                icon={
                  <ToggleIcon
                    onIcon={item.onIcon}
                    offIcon={item.offIcon}
                    on={selected === i}
                  />
                }
              />
            ))}
          </BottomNavigation>
        </Paper>
      </Box>
    </>
  );
}
