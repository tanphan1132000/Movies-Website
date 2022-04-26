import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import VideoCard from '../Shared/VideoCard';

export default function HomePage() {
    const [movies, setMovies] = useState([])
    useEffect(() => {
        fetch('/api/movies')
            .then(res => res.json())
            .then(res => setMovies(res.content))
    }, [])

    return (
        <Grid container
            columns={4}
            justifyContent="center"
            alignItems="center"
            sx={{
                columnGap: 5,
                rowGap: 5,
                mt: "2%"
            }}
        >
            {movies.map((movie, index) => <VideoCard movie={movie} key={index} />)}
        </Grid>
    );
}
