const Product = require('../models/Product');
const { mongooseToObject } = require('../../util/mongoose');

class ProductController {
    // [GET] /sport_bluetooth/:slug
    show(req, res, next) {
        Product.findOne({ slug: req.params.slug})
            .then((sport_bluetooth) => {
                res.render('sport_bluetooth/show', { sport_bluetooth: mongooseToObject(sport_bluetooth) });
            })
            .catch(next);
    }
}

module.exports = new ProductController(); 