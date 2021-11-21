const Shoe = require('../models/Shoe')
const { MutilMongooseToObject }= require('../../util/mongoose')
const { MongooseToObject }= require('../../util/mongoose')

class Shoecontroller{

    // GET /
    index (req, res, next) {
        Shoe.find({})
        .then (Shoes => {
            res.render('Shoe', {
                Shoes: MutilMongooseToObject(Shoes)
            })
        }) 
        .catch (next)
    }
     //Get /Detail

    show (req , res ,next) {
       Shoe.findOne ({ slug:  req.params.slug})
       .then (Shoes =>{
           res.render('Detail/shoedetail',{
               Shoes: MongooseToObject(Shoes)
           })

       })
       .catch(next);
    }
     //get /Shoe/Create

    create (req , res ,next) {   
            res.render('Create/createshoe')
     }
     //Post /Shoe/store
     store (req , res ,next) {   
        // res.json(req.body);
        const formData = req.body;
        const shoe = new Shoe(formData);
        shoe.save()
        .then(() => res.redirect('/shoe'))
        .catch(err => {

        });
    }
    storedshoe (req , res ,next){
        Shoe.find({})
            .then( Shoes => {
                res.render('Store/storeshoe', {
                Shoes: MutilMongooseToObject(Shoes) 
            })
         })
            .catch(next)
    }


    edit(req , res ,next) {
        Shoe.findById(req.params.id)
        .then( shoe => res.render("Edit/shoe", {
            shoe: MongooseToObject(shoe)
        }))

        .catch(next);
     
    }
    // [Put] /Shoe
    update(req , res ,next) {
        Shoe.updateOne ({ _id: req.params.id }, req.body)
        .then(() => res.redirect('/Shoe/storedshoe'))
        .catch(next);
     
    }
    delete(req , res ,next) {
        Shoe.deleteOne ({ _id: req.params.id })
        .then(() => res.redirect('back'))
        .catch(next);
     
    }

    
}
module.exports = new Shoecontroller();