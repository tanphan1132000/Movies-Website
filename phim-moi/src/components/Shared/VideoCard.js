import React from 'react';
import Card from '@mui/material/Card';
import { CardMedia, CardContent, CardActions } from '@mui/material';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

export default function VideoCard({movie}) {
    return (
            <Card sx={{ maxWidth: 325 }}>
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
            <CardActions>
                <Link to={"/movie/" + movie.id}><Button size="small">Xem</Button></Link>
            </CardActions>
        </Card>        
    );
}
