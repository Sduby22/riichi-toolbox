
import React from "react";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Tiles from "../../MahjongTiles";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import SwipeableViews, { OnChangeIndexCallback } from "react-swipeable-views";
import {
    Button,
    Card,
    CardActions,
    CardContent,
    Collapse,
    Container,
    Divider,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    ListSubheader,
    Paper,
} from "@mui/material";
import { FormattedMessage } from "react-intl";
import Yaku from './Yaku'
import Fu from './Fu'

type Props = {
    tabValue: number;
    handleTabChangeIndex: OnChangeIndexCallback;
};
interface TabPanelProps {
    children?: React.ReactNode;
    dir?: string;
    index: number;
    value: number;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    {children}
                </Box>
            )}
        </div>
    );
}

function Cheatsheet({ tabValue, handleTabChangeIndex }: Props) {
    return (
        <Box sx={{}}>
            <SwipeableViews index={tabValue} onChangeIndex={handleTabChangeIndex}>
                <TabPanel value={tabValue} index={0}>
                    <Yaku />
                </TabPanel>
                <TabPanel value={tabValue} index={1}>
                    <Fu />
                </TabPanel>
            </SwipeableViews>
        </Box>
    );
}

export default Cheatsheet;