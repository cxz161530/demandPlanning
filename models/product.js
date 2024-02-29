const mongoose = require('mongoose')
const Customer = require('./customer');

const Schema = mongoose.Schema;

const demandSchema = new Schema({
    customerName: {
        type:String,
        required: true
    },
    CQ: Number,
    "CQ+1": Number,
    "CQ+2": Number,
    "CQ+3": Number,
    //one to many relationshi refer userSchema
    user:{
        type: Schema.Types.ObjectId,ref:'User'
    }
    

},{
    timestamps: true
})



const productSchema= new Schema({
    Product_ID: Number,
    Category:String,
    Product_Name: String,
    Product_Status: String,
    customer: [{
        type: Schema.Types.ObjectId, 
        ref: 'Customer' 
        
      }],

    demands: [demandSchema]
},{
    timestamps: true
})







module.exports = mongoose.model('Product', productSchema);