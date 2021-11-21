const Balo = require('../models/Balo')
const { MutilMongooseToObject }= require('../../util/mongoose')
const { MongooseToObject }= require('../../util/mongoose')

class Balocontroller{

    // GET /
    index (req, res, next) {
        Balo.find({})
        .then (Balos => {
            res.render('Balo', {
                Balos: MutilMongooseToObject(Balos)
            })
        }) 
        .catch (next)
    }
     //Get /Detail

    show (req , res ,next) {
       Balo.findOne ({ slug:  req.params.slug})
       .then (Balos =>{
           res.render('Detail/balodetail',{
               Balos: MongooseToObject(Balos)
           })

       })
       .catch(next);
    }
     //get /Balo/Create

    create (req , res ,next) {   
            res.render('Create/createbalo')
     }
     //Post /Balo/store
     store (req , res ,next) {   
        // res.json(req.body);
        const formData = req.body;
        const balo = new Balo(formData);
        balo.save()
        .then(() => res.redirect('/balo'))
        .catch(next);
    }
    storedbalo (req , res ,next){
        Balo.find({})
            .then( Balos => {
                res.render('Store/storebalo', {
                Balos: MutilMongooseToObject(Balos) 
            })
         })
            .catch(next)
    }


    edit(req , res ,next) {
        Balo.findById(req.params.id)
        .then( balo => res.render("Edit/balo", {
            balo: MongooseToObject(balo)
        }))

        .catch(next);
     
    }
    // [Put] /Balo
    update(req , res ,next) {
        Balo.updateOne ({ _id: req.params.id }, req.body)
        .then(() => res.redirect('/Balo/storedbalo'))
        .catch(next);
     
    }
    delete(req , res ,next) {
        Balo.deleteOne ({ _id: req.params.id })
        .then(() => res.redirect('back'))
        .catch(next);
     
    }

    
}
module.exports = new Balocontroller();