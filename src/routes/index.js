const newsRouter = require('./news');

function route(app) {
    app.use('/news', newsRouter);

    app.get('/search', (req, res) => {
        res.render('search');
    });

    app.get('/', (req, res) => {
        res.render('home');
    });
}

module.exports = route;
