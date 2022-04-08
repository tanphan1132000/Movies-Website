const moviesRouter = require('./movies')

function route(app)
{  
    app.use('/api', moviesRouter)
}

module.exports = route