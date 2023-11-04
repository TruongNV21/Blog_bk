const newsRouter = require('./news.route');
const sitesRouter = require('./sites.route')

function route(app){
    app.use("/news", newsRouter);
    app.use("news/detail", newsRouter)
    app.use('/', sitesRouter)
    app.use('/search',sitesRouter)

}

module.exports = route;