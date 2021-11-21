const Boy = require('../models/Boy')
const { MutilMongooseToObject }= require('../../util/mongoose')
const { MongooseToObject }= require('../../util/mongoose')

class Boycontroller{

    // GET /
    index (req, res, next) {
        Boy.find({})
        .then (Boys => {
            res.render('Boy', {
                Boys: MutilMongooseToObject(Boys)
            })
        }) 
        .catch (next)
    }
     //Get /Detail

    show (req , res ,next) {
       Boy.findOne ({ slug:  req.params.slug})
       .then (Boys =>{
           res.render('Detail/boydetail',{
               Boys: MongooseToObject(Boys)
           })

       })
       .catch(next);
    }
     //get /Boy/Create

    create (req , res ,next) {   
            res.render('Create/createboy')
     }
     //Post /Boy/store
     store (req , res ,next) {   
        // res.json(req.body);
        const formData = req.body;
        const boy = new Boy(formData);
        boy.save()
        .then(() => res.redirect('/boy'))
        .catch(next);
    }
    storedboy (req , res ,next){
        Boy.find({})
            .then( Boys => {
                res.render('Store/storeboy', {
                Boys: MutilMongooseToObject(Boys) 
            })
         })
            .catch(next)
    }


    edit(req , res ,next) {
        Boy.findById(req.params.id)
        .then( boy => res.render("Edit/boy", {
            boy: MongooseToObject(boy)
        }))

        .catch(next);
     
    }
    // [Put] /Boy
    update(req , res ,next) {
        Boy.updateOne ({ _id: req.params.id }, req.body)
        .then(() => res.redirect('/Boy/storedboy'))
        .catch(next);
     
    }
    delete(req , res ,next) {
        Boy.deleteOne ({ _id: req.params.id })
        .then(() => res.redirect('back'))
        .catch(next);
     
    }

    
}
module.exports = new Boycontroller();