const express = require("express")
const main = require("../microservices/fetch.js")
const AsyncFunction = require("../microservices/fetch.js")
const mailer = require("../microservices/mailer.js")

router = express.Router()

router.get('/', (req,res) => {
	  res.status(200).render('index')
});

router.post('/url_fetcher', async (req,res) => {
	try{
		const url = req.body.url //name in index.ejs input
		var mail_text = await AsyncFunction.main(url);
		await mailer(mail_text);
		res.status(202).render('fetched',{text:'HTML sent', message:''});
	}
	catch(e){
		res.status(404).render('fetched',{text:'Oops, we have a problem', 
			message:'try returning to the front page!'});
	}
});

module.exports = router;