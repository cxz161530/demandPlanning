const ProductModel = require('../models/product')
const CustomerModel = require('../models/customer');


module.exports = {

	userShow,
	index,
	newProduct,
	create,
	show


}
//auth log in will render this landing page and showing hiding info 
function userShow(req, res){
		res.render('landing', )

}

async function index(req,res){
	try{
		const productsInfoFromDB = await ProductModel.find({})
		console.log(productsInfoFromDB)
	
		res.render('products/showAll', { productsDocs: productsInfoFromDB });
		

	}catch(err){
		console.log(err)
		
	}
	
}

function newProduct(req, res){
	res.render('products/new')
}

async function create(req, res){
	try{
		const products = await ProductModel.create(req.body);
		res.redirect('/products/showAll')
		
	} catch(err){
		console.log(err)
		res.send(err.message)
	}
}

async function show(req, res) {

  
	try {
  
		// req.params.id value is coming from the browsers request
		// the name `.id` is defined in the routes/products show route
		// router.get('/:id', movieCtrl.show);
	  const productFromTheDatabase = await ProductModel
	  									.findById(req.params.id)
										.populate('customer') 
										.exec()				
									
	  console.log(productFromTheDatabase);
	  const productsInfoFromDB = await ProductModel.find({})
	  // For the dropdown for the addToCustomer
	  // We need to search the database for all of the customers
	
		const customersNotInTheProduct = await CustomerModel.find({_id: {$nin: productFromTheDatabase.customer}})
		// $nin -  Mongodb comparison query operators <- google to view these
  

		// express is changing the ejs into html and sending it to the browser (client side/frontend)
	  res.render("products/show", {
		product: productFromTheDatabase, // the key product, becomes a variable name in the show.ejs
		customers: customersNotInTheProduct,
		productsDocs: productsInfoFromDB
	  });
	} catch (err) {
	  console.log(err)
	  res.send(err);
	}
  }