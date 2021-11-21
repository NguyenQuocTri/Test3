const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
mongoose.plugin(slug);
const Schema = mongoose.Schema;

const Perfume = new Schema({
    name: { type: String},
    description: { type: String},
    price: { type: Number, },
    image: { type: String, },
    slug: { type: String,  slug: 'name', unique: true,},
 },{
     timestamps: true,
 }
 );
                                     
 module.exports = mongoose.model('Perfume', Perfume);