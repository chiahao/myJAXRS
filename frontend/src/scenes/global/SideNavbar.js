import { useState } from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from "../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import Dashboard from "@mui/icons-material/Dashboard";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import Approval from "@mui/icons-material/Approval";
import AddOutlined from "@mui/icons-material/AddOutlined";

const SideNavbar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [selected, setSelected] = useState("Dashboard");

    return (
        <Box
            sx={{
                // height: '100%',
                backgroundColor: `${colors.primary[400]}`,
                "& .ps-menuitem-root:hover": {
                    color: '#868dfb !important'
                },
                "& .pro-icon-wrapper": {
                    background: "transparent !important"
                }
            }}
        >
            <Sidebar backgroundColor={colors.primary[400]}>
            {/*<Sidebar>*/}
                <Menu>
                    <MenuItem
                        active={selected === '總覽'}
                        icon={<Dashboard />}
                        component={<Link to="/" />}
                    >
                        <Typography>總覽</Typography>
                    </MenuItem>
                    <MenuItem
                        active={selected === '人員申請表'}
                        icon={<AddOutlined />}
                        component={<Link to="/apply" />}
                    >
                        <Typography>建立報到</Typography>
                    </MenuItem>
                    <MenuItem
                        active={selected === '人員申請表'}
                        icon={<Approval />}
                        component={<Link to="/people" />}
                    >
                        <Typography>人員申請表</Typography>
                    </MenuItem>
                </Menu>
            </Sidebar>

        </Box>
    );
}

export default SideNavbar;