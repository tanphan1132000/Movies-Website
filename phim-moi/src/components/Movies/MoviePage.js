import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function MoviePage(props) {
    const [content, setContent] = useState({})
    let {movieId} = useParams()
    useEffect(() => {
        fetch('/api/movie/' + movieId)
            .then(res => res.json())
            .then(res => setContent(res.content))
    }, [])


    return (
        <div>
            <h1>{content.name}</h1>
        </div>
    )
}