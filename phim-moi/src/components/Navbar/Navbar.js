import React from "react";
import { Link } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import HomeIcon from '@mui/icons-material/Home';

export default function Navbar() {
    return (
        <Box>
            <AppBar position="static">
                <Toolbar>
                    <Button color="inherit" component={Link} to="/">
                        HOME
                    </Button>
                    <Button color="inherit" component={Link} to="/about">
                        ABOUT
                    </Button>
                    <Button color="inherit" component={Link} to="/login">
                        LOGIN
                    </Button>
                </Toolbar>
            </AppBar>
        </Box>
    )
}