const ProductModel = require('../models/products')


module.exports = {

	userShow,
	index,
	newProduct,
	create


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