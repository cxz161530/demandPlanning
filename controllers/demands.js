const ProductModel = require('../models/product')


module.exports = {
	create,
	delete: deleteOne
}

async function deleteOne(req, res){
	try {
		// find the product with the demand
		const productDoc = await ProductModel.findOne({'demands._id': req.params.id, 'reviews.user': req.user._id})

		if (!productDoc) return res.redirect('/products')

		productDoc.demands.remove(req.params.id)
	
		productDoc.save()

		res.redirect(`/products/${productDoc._id}`)
	} catch(err){
		console.log(err)
		res.send(err)
	}
}

async function create(req, res){
	// To find the product
	console.log('====================================')
	console.log(req.user, "< ---- req.user")
	console.log('====================================')
	try {
		
		const productDoc = await ProductModel.findById(req.params.id)

		
		// Add the users information the demands
		req.body.user = req.user._id
		req.body.userName = req.user.name
		req.body.userAvatar = req.user.avatar
	
		productDoc.demands.push(req.body); 
		await productDoc.save() 
		res.redirect(`/products/${req.params.id}`)

	} catch(err){
		console.log(err)
		res.send(err)
	}
	


}