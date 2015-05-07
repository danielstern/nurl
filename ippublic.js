#! /usr/bin/env node

var request = require('request');

request.get('http://ipecho.net/plain', function (error, response, body) {
	if (error){
		throw new Error("There was a problem with the Request library.\n" + 		error);
		return;
	}
	console.log(body);
})
