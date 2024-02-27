const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const demandSchema= new Schema({
    title: String
}


)







module.exports = mongoose.model('demand', demandSchema);