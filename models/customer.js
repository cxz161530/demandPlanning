const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// the schema enforces the shape of the documents we create
// in the customer collection
const customerSchema = new Schema({
  customer_name: {type: String},
  customer_region:{
    type: String,
    enum: ['US','APGC','EUR','OTHERS'],
    
  },

}, {
  timestamps: true
});

module.exports = mongoose.model('Customer', customerSchema);