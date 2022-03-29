import React from "react";
import { Link } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';


export default function Navbar() {
    return (
        <Box>
            <AppBar position="static">
                <Toolbar>
                    <Button color="inherit">
                        <Link to="/">HOME</Link>
                    </Button>
                    <Button>
                        <Link to="/About">ABOUT</Link>
                    </Button>
                    <Button color="inherit">
                        <Link to="/Login">LOGIN</Link>
                    </Button>
                </Toolbar>
            </AppBar>
        </Box>
    )
}