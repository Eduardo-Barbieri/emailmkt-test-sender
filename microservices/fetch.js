const fetch = require('node-fetch');

async function main(url){
	var res = await fetch(url);
	var html = await res.text();
	return html;
}

const AsyncFunction = Object.getPrototypeOf(async function(){}).constructor;

module.exports = {
	main,
	AsyncFunction
}
