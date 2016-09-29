//BASE SETUP
//====================================
// CALL THE PACKAGES

var express = require('express');//call express
var app = express(); // define our app using express
var bodyParser = require('body-parser');//call body-parser
var morgan = require('morgan');//use to see request
var mongoose = require('mongoose');//for working w/ our database
var port = process.env.PORT || 8080;//set the port for our app

//BASE SETUP
//==========================


//APP CONFIG
//====================================
//use body parser so we can grab information from POST request
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

//config our app to handle CORS request
app.use(function(req,res,next){
	res.setHeader('Access-Control-Allow-Origin', '*'); 
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST'); 
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,Authorization'); 
	next(); 
});

//connect to our database (hosted in modulus.io)

//mongoose.connect('mongodb://node:noder@novus.modulusmongo.net:27017/Iganiq8o')
//connect to our database hosted locally

mongoose.connect('mongodb://localhost:27017/CRM');



//log all request to the console
app.use(morgan('dev'));
// ROUTES FOR OUR API

//basic routes for the homepage

app.get('/',function(req,res){
	res.send('Welcome to the homepage!');
});

//get an instance of the express router
var apiRouter=express.Router();

//test route to make sure everything is working
//accessed at GET http://localhost:8080/api
apiRouter.get('/',function(req,res){
	res.json({message: 'hooray! welcome to our api'});
});

 // more routes for our API will happen here 

 // REGISTER OUR ROUTES ------------------------------
 // all of our routes will be prefixed with /api 
app.use('/api', apiRouter);


//START THE SERVER

app.listen(port);
console.log('Magic happens on port '+port);