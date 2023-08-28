import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import logo_ntnu from '../../images/logo-ntnu.png';

const NTNUAppBar = () => {
    return (
        <AppBar position="static" sx={{background: '#4d070b'}}>
            <Container maxWidth="md">
                <Toolbar disableGutters>
                    <img src={logo_ntnu}  alt="NTNU LOGO" height="37" />
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            pl: 2,
                            borderLeft: 1,
                            display: {xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            // fontWeight: 900,
                            // letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none'
                        }}
                    >
                       人事室
                    </Typography>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default NTNUAppBar;
