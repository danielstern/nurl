#! /usr/bin/env node

var request = require('request');
var userArgs = process.argv.splice(2);
if (!userArgs[0]){
	console.log( "You must specify a URL, e.g., `nurl http://google.com`");
	return;
}

userArgs.forEach(function(arg){
	request.get(arg, function (error, response, body) {
		if (error){
			throw new Error("There was a problem with the Request library.\n" + error);
			return;
		}
    console.log(body);
})

});
