import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from 'react-router-dom';

import Navbar from "./components/Navbar/Navbar";
import HomePage from "./components/Home/HomePage";
import LoginPage from "./components/Auth/LoginPage";
import MoviePage from "./components/Movies/MoviePage";
export default function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/About" element={<About />} />
                <Route path="/movie/:movieId" element={<Movie />} />
            </Routes>
        </Router>
    )
};

function Home() {
    return (
        <HomePage/>
    )
}

function Login() {
    return (
        <LoginPage/>
    )
}

function About() {
    return (
        <h1>Day la trang phim moi :)</h1>
    )
}

function Movie()
{
    return(
        <MoviePage/>
    )
}