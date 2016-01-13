'use strict';

var shunter = require('shunter');

var app = shunter({
	routes: {
		localhost: {
			default: {
				host: '127.0.0.1',
				port: 5000
			}
		}
	},
	jsonViewParameter: 'json',
	path: {
		themes: __dirname
	}
});

app.start();
