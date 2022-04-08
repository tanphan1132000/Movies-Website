const express = require("express")
const router = express.Router()

const moviesController = require("../app/controller/moviesController")

router.get('/movies', moviesController.movie)

module.exports = router