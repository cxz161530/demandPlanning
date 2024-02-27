const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const productsSchema= new Schema({
    Product_ID: Number,
    Category:String,
    Product_Name: String,
    Product_Status: String
}


)







module.exports = mongoose.model('products', productsSchema);