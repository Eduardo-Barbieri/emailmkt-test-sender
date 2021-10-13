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
		res.status(202).render('fetched',{text:'HTML enviado', message:''});
	}
	catch(e){
		res.status(404).render('fetched',{text:'Oops, we have a problem', 
			message:'try returning to the front page!'});
	}
});
// router.post('/send_mail', async (req,res) => {
// 	await mailer();
// 	res.render('index');
// });

module.exports = router;