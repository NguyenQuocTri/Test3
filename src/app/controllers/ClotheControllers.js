const Clothe = require('../models/Clothe')
const { MutilMongooseToObject }= require('../../util/mongoose')
const { MongooseToObject }= require('../../util/mongoose')

class Clothecontroller{

    // GET /
    index (req, res, next) {
        Clothe.find({})
        .then (Clothes => {
            res.render('Clothe', {
                Clothes: MutilMongooseToObject(Clothes)
            })
        }) 
        .catch (next)
    }
     //Get /Detail

    show (req , res ,next) {
       Clothe.findOne ({ slug:  req.params.slug})
       .then (Clothes =>{
           res.render('Detail/clothedetail',{
               Clothes: MongooseToObject(Clothes)
           })

       })
       .catch(next);
    }
     //get /Clothe/Create

    create (req , res ,next) {   
            res.render('Create/createclothe')
     }
     //Post /Clothe/store
     store (req , res ,next) {   
        // res.json(req.body);
        const formData = req.body;
        const clothe = new Clothe(formData);
        clothe.save()
        .then(() => res.redirect('/clothe'))
        .catch(next);
    }
    storedclothe (req , res ,next){
        Clothe.find({})
            .then( Clothes => {
                res.render('Store/storeclothes', {
                Clothes: MutilMongooseToObject(Clothes) 
            })
         })
            .catch(next)
    }


    edit(req , res ,next) {
        Clothe.findById(req.params.id)
        .then( clothe => res.render("Edit/clothe", {
            clothe: MongooseToObject(clothe)
        }))

        .catch(next);
     
    }
    // [Put] /Clothe
    update(req , res ,next) {
        Clothe.updateOne ({ _id: req.params.id }, req.body)
        .then(() => res.redirect('/Clothe/storedclothe'))
        .catch(next);
     
    }
    delete(req , res ,next) {
        Clothe.deleteOne ({ _id: req.params.id })
        .then(() => res.redirect('back'))
        .catch(next);
     
    }

    
}
module.exports = new Clothecontroller();