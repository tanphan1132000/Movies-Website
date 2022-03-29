import React, {useState, useEffect} from "react";

export default function MoviePage() {
    const [content, setContent] = useState('init')

    useEffect(() => {
        fetch('/movie')
        .then(res => res.json())
        .then(res => setContent(res.api))
    }, [])


    return (
        <h1>{content}</h1>
    )
}