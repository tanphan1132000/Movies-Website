import React from 'react';
import Card from '@mui/material/Card';
import { CardMedia, CardContent, CardActions, CardActionArea } from '@mui/material';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

export default function VideoCard({ movie }) {
    return (
        <Card sx={{ width: 325, boxShadow: 3, height: 300}}>
            <CardActionArea component={Link} to={"/movie/" + movie.id} sx={{height: 300}}>
                <CardMedia
                    component="img"
                    height={175}
                    src={movie.cover}
                    alt={movie.title}
                />
                <CardContent>
                    <Typography variant='h5' color="text.secondary">
                        {movie.title}
                    </Typography>
                    <Typography variant='body2' color="text.secondary">
                        {movie.author}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
