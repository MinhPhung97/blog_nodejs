const Course = require('../models/Course');
const { multipleMongooseToObject } = require('../../util/mongoose');

class SiteController {
    // [GET] /
    home(req, res, next) {
        // Course.find({}, function (err, courses) {
        //     if (!err) {
        //         res.json(courses);
        //     } else {
        //         res.status(400).json({ err: 'ERRor!!' });
        //     }
        // });

        Course.find({})
            .then((courses) => {
                // courses = courses.map((course) => course.toObject());
                res.render('home', {
                    courses: multipleMongooseToObject(courses),
                });
            })
            .catch((err) => next(err));

        // res.json({
        //   name: "test",
        // });
        // // res.render("home");
    }

    // [GET] /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
