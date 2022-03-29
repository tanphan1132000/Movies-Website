import React, {useState, useEffect} from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import VideoCard from '../Shared/VideoCard';

export default function HomePage() {
    const [movies, setMovies] = useState([])
    useEffect(() => {
        fetch('/api/movie')
        .then(res => res.json())
        .then(res => setMovies(res.content))
    }, [])

    return (
        <Box>
            <Grid container>
                {movies.map( (movie, index)  => <VideoCard movie={movie} key={index}/>)}
            </Grid>
        </Box>
    );
}
