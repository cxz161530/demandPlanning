const productsModel = require('../models/products')


module.exports = {

	index,

}

async function index(req, res){
	

	try {
	
		const productsDocumentsFromTheDB = await productsModel.find({})
		console.log(productsFromTheDB)
		
		res.render('products/index', {productsDocs: productsDocumentsFromTheDB})
	} catch(err){
		console.log(err)
		res.redirect('/')
	}
}