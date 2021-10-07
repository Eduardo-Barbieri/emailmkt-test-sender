const express = require("express")
const main = require("../fetch/fetch.js")

router = express.Router()

router.get("/", (req,res)=>{
	body = main();
	res.status(200).json({
		menssagem:"url fetched"
	});
});

module.exports = router;