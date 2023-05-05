const Product = require('../models/Product');
const { mutipleMongooseToObject } = require('../../util/mongoose');

class SiteController {
    //[GET] /
    index(req, res, next) {
        Product.find({})
            .then(sport_bluetooth => {
                res.render('home', {
                    sport_bluetooth: mutipleMongooseToObject(sport_bluetooth)
                });
            })
            .catch(next);
      
    }

    //[GET] /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
