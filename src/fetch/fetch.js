const fetch = require('node-fetch')

async function main(){
	const res = await fetch(
	'http://s3.amazonaws.com/mailmkt.aviva/0539_verao_2122_email_3_b2c_RQ/0539_verao_2122_email_3_b2c_RQ.html');
	const body = await res.text();
	console.log(body); 
	return body;
}

module.exports = main
