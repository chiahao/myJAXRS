import { useState } from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from "../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import Dashboard from "@mui/icons-material/Dashboard";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import Approval from "@mui/icons-material/Approval";
import Add from "@mui/icons-material/Add";

const SideNavbar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [selected, setSelected] = useState("Dashboard");

    return (
        <Box
            // sx={{
            //     "& .pro-sidebar-inner": {
            //         background: `${colors.primary[400]} !important`
            //     },
            //     "& .pro-icon-wrapper": {
            //         background: "transparent !important"
            //     }
            // }}
        >
            <Sidebar>
                <Menu>
                    <MenuItem icon={<Dashboard />}> 總覽</MenuItem>
                    <MenuItem icon={<Add />}> 建立報到</MenuItem>
                    <MenuItem icon={<Approval />}> 人員申請表</MenuItem>
                </Menu>
            </Sidebar>

        </Box>
    );
}

export default SideNavbar;