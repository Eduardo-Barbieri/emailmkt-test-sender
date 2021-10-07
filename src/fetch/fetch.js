const fetch = require('node-fetch')

async function main(url){
	const res = await fetch(url);
	const body = await res.text();
	console.log(body); 
	return body;
}

module.exports = main;
