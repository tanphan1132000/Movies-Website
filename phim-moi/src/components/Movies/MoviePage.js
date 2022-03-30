import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { CardContent, CardMedia, Stack, Typography } from "@mui/material";

export default function MoviePage(props) {
    const [content, setContent] = useState({})
    let { movieId } = useParams()
    useEffect(() => {
        fetch('/api/movie/' + movieId)
            .then(res => res.json())
            .then(res => setContent(res.content))
            .then(res => console.log(content))
    }, [movieId])

    return (
        <Stack sx={{ width: "100%" }} direction="row">
            <Stack sx={{ width: "50%" }}>
                <CardMedia
                    component="video"
                    autoPlay
                    controls
                    src={content.src}
                />
                <CardContent>
                    <Typography variant='h5' color="text.secondary">
                        Ten phim
                    </Typography>
                    <Typography variant='body2' color="text.secondary">
                        Dao dien
                    </Typography>
                </CardContent>
            </Stack>
            <Stack sx={{ width: "50%" }}>
                <CardContent />
            </Stack>
        </Stack>
    )
}