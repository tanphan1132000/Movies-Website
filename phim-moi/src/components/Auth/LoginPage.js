import { Button, Stack, TextField, Typography } from "@mui/material";
import React from "react";

export default function LoginPage() {
    return (
        <Stack spacing={5}
            sx={{
                width: "30%",
                mx: "auto",
                mt: "5%"
            }}
        >
            <Typography variant="h4" color="text.secondary" sx={{ textAlign: "center" }}>
                LOGIN
            </Typography>
            <TextField
                id="standard-search"
                label="Username"
                type="search"
                variant="outlined"
            />
            <TextField
                id="standard-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
                variant="outlined"
            />
            <Stack
                direction='row'
                justifyContent='center'
                spacing={5}
            >
                <Button variant="contained" sx={{ width: '25%' }}>Login</Button>
                <Button variant="contained" sx={{ width: '25%' }}>Sign Up</Button>
            </Stack>

        </Stack>
    )
}