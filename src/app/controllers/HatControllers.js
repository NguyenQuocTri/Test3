const Hat = require('../models/Hat')
const { MutilMongooseToObject }= require('../../util/mongoose')
const { MongooseToObject }= require('../../util/mongoose')

class Hatcontroller{

    // GET /
    index (req, res, next) {
        Hat.find({})
        .then (Hats => {
            res.render('Hat', {
                Hats: MutilMongooseToObject(Hats)
            })
        }) 
        .catch (next)
    }
     //Get /Detail

    show (req , res ,next) {
       Hat.findOne ({ slug:  req.params.slug})
       .then (Hats =>{
           res.render('Detail/hatdetail',{
               Hats: MongooseToObject(Hats)
           })

       })
       .catch(next);
    }
     //get /Hat/Create

    create (req , res ,next) {   
            res.render('Create/createhat')
     }
     //Post /Hat/store
     store (req , res ,next) {   
        // res.json(req.body);
        const formData = req.body;
        const hat = new Hat(formData);
        hat.save()
        .then(() => res.redirect('/hat'))
        .catch();
    }
    storedhat (req , res ,next){
        Hat.find({})
            .then( Hats => {
                res.render('Store/storehat', {
                Hats: MutilMongooseToObject(Hats) 
            })
         })
            .catch(next)
    }


    edit(req , res ,next) {
        Hat.findById(req.params.id)
        .then( hat => res.render("Edit/hat", {
            hat: MongooseToObject(hat)
        }))

        .catch(next);
     
    }
    // [Put] /Hat
    update(req , res ,next) {
        Hat.updateOne ({ _id: req.params.id }, req.body)
        .then(() => res.redirect('/Hat/storedhat'))
        .catch(next);
     
    }
    delete(req , res ,next) {
        Hat.deleteOne ({ _id: req.params.id })
        .then(() => res.redirect('back'))
        .catch(next);
     
    }

    
}
module.exports = new Hatcontroller();