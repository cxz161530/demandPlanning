const ProductModel = require('../models/product')


module.exports = {
	create,
	delete: deleteOne,
    edit,
    update
}

async function deleteOne(req, res){
	try {
		// find the product with the demand
		const productDoc = await ProductModel.findOne({'demands._id': req.params.id})

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


async function edit(req, res) {
    
    const product = await ProductModel.findOne({'demands._id': req.params.id});

    const demands = product.demands.id(req.params.id);
    // Render the comments/edit.ejs template, passing to it the comment
    res.render('demands/edit', { demands });
  }
  
  async function update(req, res) {
    
    const product = await ProductModel.findOne({'demands._id': req.params.id});
 
    const demandSubdoc = product.demands.id(req.params.id);
    
    // Update the text of the comment
    demandSubdoc.CQ = req.body.CQ;
    demandSubdoc['CQ+1'] = req.body['CQ+1'];
    demandSubdoc['CQ+2'] = req.body['CQ+2'];

    try {
      await product.save();
    } catch (e) {
      console.log(e.message);
    }

    res.redirect(`/products/${product._id}`);
  }
  