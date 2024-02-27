const demandModel = require('../models/demand')


module.exports = {

	index,

}

async function index(req, res){
	

	try {
	
		const demandDocumentsFromTheDB = await demandModel.find({})
		console.log(demandDocumentsFromTheDB)
		
		res.render('demand/index', {demandDocs: demandDocumentsFromTheDB})
	} catch(err){
		console.log(err)
		res.redirect('/')
	}
}