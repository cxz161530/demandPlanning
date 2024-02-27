const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const productsSchema= new Schema({
    title: String
}


)







module.exports = mongoose.model('products', productsSchema);