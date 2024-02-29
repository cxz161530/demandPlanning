const CustomerModel = require("../models/customer");
const ProductModel = require('../models/product')

module.exports = {
  new: newCustomer,
  create,
  addToCust
};

async function addToCust(req, res){
	
	
	try {
		
		const productDoc = await ProductModel.findById(req.params.productId);
		// add the performers id to the movieDoc.cast array
		productDoc.customer.push(req.body.customerId);
		// we mutated the movieDoc, so we have to tell the database!
		await productDoc.save()
		// redirect the client back to the movies show page!
		res.redirect(`/products/${req.params.productId}`)


	} catch(err){
		console.log(err)
		res.send(err)
	}

}

async function create(req, res) {
	
  
  
	try {
									/// Peforfomer.create is our model using the create method 
									// to take the contents of the form (req.body), and go all the 
									// way to mongodb atlas, to create a new document in the performers
									// collection
  
									// createdPerformer is the variable that holds the result 
									// of Performer.create which is the document you created in the 
									// database
	  const createdCustomer = await CustomerModel.create(req.body);
	  console.log(createdCustomer, " <- createdCustomer")
	  // tell the client to make a GET request to /performers/new
	  res.redirect("/customers/new");
	} catch (err) {
	  // if there is an error send back the object 
	  res.send(err);
	}
  }
  
  async function newCustomer(req, res) {
	try {
	  const allCustomers = await CustomerModel.find({});
	  res.render("customers/new", {
		title: "Add Customer",
		customers: allCustomers,
	  });
	} catch (err) {
	  res.send(err);
	}
  }