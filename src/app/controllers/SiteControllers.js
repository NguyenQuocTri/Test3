const Item = require('../models/Item')
const { MutilMongooseToObject }= require('../../util/mongoose')

class SiteController {

    // GET /
    index (req, res, next) {
        Item.find({})
        .then (Items => {
            res.render('home', {
                Items: MutilMongooseToObject(Items)
            })
        })
        .catch (next)
    }
 
}
module.exports = new SiteController();