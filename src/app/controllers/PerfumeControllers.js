const Perfume = require('../models/Perfume')
const { MutilMongooseToObject }= require('../../util/mongoose')
const { MongooseToObject }= require('../../util/mongoose')

class Perfumecontroller{

    // GET /
    index (req, res, next) {
        Perfume.find({})
        .then (Perfumes => {
            res.render('Perfume', {
                Perfumes: MutilMongooseToObject(Perfumes)
            })
        }) 
        .catch (next)
    }
     //Get /Detail

    show (req , res ,next) {
       Perfume.findOne ({ slug:  req.params.slug})
       .then (Perfumes =>{
           res.render('Detail/Perfumedetail',{
               Perfumes: MongooseToObject(Perfumes)
           })

       })
       .catch(next);
    }
     //get /Perfume/Create

    create (req , res ,next) {   
            res.render('Create/createperfume')
     }
     //Post /Perfume/store
     store (req , res ,next) {   
        // res.json(req.body);
        const formData = req.body;
        const perfume = new Perfume(formData);
        perfume.save()
        .then(() => res.redirect('/perfume'))
        .catch(err => {

        });
    }
    storedperfume (req , res ,next){
        Perfume.find({})
            .then( Perfumes => {
                res.render('Store/storeperfume', {
                Perfumes: MutilMongooseToObject(Perfumes) 
            })
         })
            .catch(next)
    }


    edit(req , res ,next) {
        Perfume.findById(req.params.id)
        .then( perfume => res.render("Edit/perfume", {
            perfume: MongooseToObject(perfume)
        }))

        .catch(next);
     
    }
    // [Put] /Perfume
    update(req , res ,next) {
        Perfume.updateOne ({ _id: req.params.id }, req.body)
        .then(() => res.redirect('/Perfume/storedperfume'))
        .catch(next);
     
    }
    delete(req , res ,next) {
        Perfume.deleteOne ({ _id: req.params.id })
        .then(() => res.redirect('back'))
        .catch(next);
     
    }

    
}
module.exports = new Perfumecontroller();