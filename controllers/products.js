const productsModel = require('../models/products')


module.exports = {

	userShow,
	index,


}
//auth log in will render this landing page and showing hiding info 
function userShow(req, res){
		res.render('landing', )

}

async function index(req,res){
	try{
		const productsInfoFromDB = await productsModel.find({})
		console.log(productsInfoFromDB)
		res.render('/products/showAll',{productsDocs: productsInfoFromDB})
	}catch(err){
		console.log(err)
		res.redirect('/')

	}
	
	
	

}