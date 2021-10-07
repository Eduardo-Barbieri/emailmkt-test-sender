const express = require("express")
const main = require("../fetch/fetch.js")
const AsyncFunction = require("../fetch/fetch.js")
const mailer = require("../fetch/mailer.js")

router = express.Router()

router.get('/', (req,res) => {
	  res.render('index')
});

router.post('/url_fetcher', async (req,res) => {
	const url = req.body.url //name in index.ejs input
	var mail_text = await AsyncFunction.main(url);
	await mailer(mail_text);
	res.render('fetched');
});
// router.post('/send_mail', async (req,res) => {
// 	await mailer();
// 	res.render('index');
// });

module.exports = router;