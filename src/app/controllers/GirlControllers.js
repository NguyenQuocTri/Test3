const Girl = require('../models/Girl')
const { MutilMongooseToObject }= require('../../util/mongoose')
const { MongooseToObject }= require('../../util/mongoose')

class Girlcontroller{

    // GET /
    index (req, res, next) {
        Girl.find({})
        .then (Girls => {
            res.render('Girl', {
                Girls: MutilMongooseToObject(Girls)
            })
        }) 
        .catch (next)
    }
     //Get /Detail

    show (req , res ,next) {
       Girl.findOne ({ slug:  req.params.slug})
       .then (Girls =>{
           res.render('Detail/girldetail',{
               Girls: MongooseToObject(Girls)
           })

       })
       .catch(next);
    }
     //get /Girl/Create

    create (req , res ,next) {   
            res.render('Create/creategirl')
     }
     //Post /Girl/store
     store (req , res ,next) {   
        // res.json(req.body);
        const formData = req.body;
        const girl = new Girl(formData);
        girl.save()
        .then(() => res.redirect('/girl'))
        .catch(next);
    }
    storedgirl (req , res ,next){
        Girl.find({})
            .then( Girls => {
                res.render('Store/storegirl', {
                Girls: MutilMongooseToObject(Girls) 
            })
         })
            .catch(next)
    }


    edit(req , res ,next) {
        Girl.findById(req.params.id)
        .then( girl => res.render("Edit/girl", {
            girl: MongooseToObject(girl)
        }))

        .catch(next);
     
    }
    // [Put] /Girl
    update(req , res ,next) {
        Girl.updateOne ({ _id: req.params.id }, req.body)
        .then(() => res.redirect('/Girl/storedgirl'))
        .catch(next);
     
    }
    delete(req , res ,next) {
        Girl.deleteOne ({ _id: req.params.id })
        .then(() => res.redirect('back'))
        .catch(next);
     
    }

    
}
module.exports = new Girlcontroller();