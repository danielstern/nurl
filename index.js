#! /usr/bin/env node

var request = require('request');
var userArgs = require('minimist')(process.argv.splice(2));

if (!userArgs._[0]){
	console.log( "You must specify a URL, e.g., `nurl http://google.com`");
	return;
}

userArgs._.forEach(function(arg){
        var verb = userArgs.X;
        if (!verb) {
          verb = 'GET';
        }
        if (verb.toUpperCase() === 'POST') {
	  request.post(arg, function (error, response, body) {
		if (error){
			throw new Error("There was a problem with the Request library.\n" + error);
			return;
		}

          console.log(body);
          })
        } else {
	  request.get(arg, function (error, response, body) {
		if (error){
			throw new Error("There was a problem with the Request library.\n" + error);
			return;
		}

          console.log(body);
          })
        }

});
