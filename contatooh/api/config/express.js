
var express = require('express');
var load = require('express-load');
var bodyParser = require('body-parser');

module.exports = function(){

	var app = express();

	// environment variable
	app.set('port', 3000);

	// middleware	
	app.set('view engine', 'ejs');
	app.set('views','./app/views');
	app.use(express.static('./public'));

	// novos middlewares  --> middleware for http protocol (put and delete) --> parse application/x-www-form-urlencoded 
	app.use(bodyParser.urlencoded({ extended: true }))
	app.use(bodyParser.json())// parse application/json 
	app.use(require('method-override')());

	/**
	 * On all requests add headers
	 */
	app.all('*', function(req, res, next) {
	    /**
	     * Response settings
	     * @type {Object}
	     */
	    var responseSettings = {
	        "AccessControlAllowOrigin": req.headers.origin,
	        "AccessControlAllowHeaders": "Content-Type,X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5,  Date, X-Api-Version, X-File-Name",
	        "AccessControlAllowMethods": "POST, GET, PUT, DELETE, OPTIONS",
	        "AccessControlAllowCredentials": true
	    };

	    // Headers
	    res.header("Access-Control-Allow-Credentials", responseSettings.AccessControlAllowCredentials);
	    res.header("Access-Control-Allow-Origin",  responseSettings.AccessControlAllowOrigin);
	    res.header("Access-Control-Allow-Headers", (req.headers['access-control-request-headers']) ? req.headers['access-control-request-headers'] : "x-requested-with");
	    res.header("Access-Control-Allow-Methods", (req.headers['access-control-request-method']) ? req.headers['access-control-request-method'] : responseSettings.AccessControlAllowMethods);

	    if ('OPTIONS' == req.method) {
	        res.send(200);
	    }
	    else {
	        next();
	    }
	});

	/**
	* load routes (express-load)
	*/ 
	load('models', {cwd: 'app'})
		.then('controllers')
		.then('routes')
		.into(app);

	/**
	 * return app
	 */

	return app;

}