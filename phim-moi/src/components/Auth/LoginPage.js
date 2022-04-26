import { Button, Stack, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

export default function LoginPage() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    useEffect(() => {
        console.log(username, password)
    }, [username, password])

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
                onChange={(e) => {
                    setUsername(e.target.value)
                }}
            />
            <TextField
                id="standard-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
                variant="outlined"
                onChange={(e) => {
                    setPassword(e.target.value)
                }}
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