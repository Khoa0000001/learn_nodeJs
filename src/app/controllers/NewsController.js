const Course = require('../models/Course');

class NewsController {
    async index(req, res) {
        try {
            const data = await Course.find({});
            res.json(data);
        } catch (err) {
            res.status(400).json({ error: err });
        }
        // res.render('news');
    }
}

module.exports = new NewsController();
