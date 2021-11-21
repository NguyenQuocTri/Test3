
const Belt = require('../models/Belt')
const { MutilMongooseToObject }= require('../../util/mongoose')
const { MongooseToObject }= require('../../util/mongoose')

class Beltcontroller{

    // GET /
    index (req, res, next) {
        Belt.find({})
        .then (Belts => {
            res.render('Belt', {
                Belts: MutilMongooseToObject(Belts)
            })
        }) 
        .catch (next)
    }
     //Get /Detail

    show (req , res ,next) {
       Belt.findOne ({ slug:  req.params.slug})
       .then (Belts =>{
           res.render('Detail/beltdetail',{
               Belts: MongooseToObject(Belts)
           })

       })
       .catch(next);
    }
     //get /Belt/Create

    create (req , res ,next) {   
            res.render('Create/createbelt')
     }
     //Post /Belt/store
     store (req , res ,next) {   
        // res.json(req.body);
        const formData = req.body;
        const belt = new Belt(formData);
        belt.save()
        .then(() => res.redirect('/belt'))
        .catch(next);
    }
    storedbelt (req , res ,next){
        Belt.find({})
            .then( Belts => {
                res.render('Store/storebelt', {
                Belts: MutilMongooseToObject(Belts) 
            })
         })
            .catch(next)
    }


    edit(req , res ,next) {
        Belt.findById(req.params.id)
        .then( belt => res.render("Edit/belt", {
            belt: MongooseToObject(belt)
        }))

        .catch(next);
     
    }
    // [Put] /Belt
    update(req , res ,next) {
        Belt.updateOne ({ _id: req.params.id }, req.body)
        .then(() => res.redirect('/Belt/storedbelt'))
        .catch(next);
     
    }
    delete(req , res ,next) {
        Belt.deleteOne ({ _id: req.params.id })
        .then(() => res.redirect('back'))
        .catch(next);
     
    }

    
}
module.exports = new Beltcontroller();