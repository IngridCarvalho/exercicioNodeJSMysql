var express = require('express');
var bodyParser = require('body-parser');
var mysql = require('mysql');
var expressLayouts = require('express-ejs-layouts');
var myConnection = require('express-myconnection');

var app = express();

// importing routes
const customerRoutes = require('./routes/routes');

app.set('view engine', 'ejs');
app.use(expressLayouts);
app.use(bodyParser.urlencoded({extended: true}));

// Connection with data
app.use(myConnection(mysql, {
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'exercicio',
  port: 3306
}, 'single'))

// Routes
app.use('/', customerRoutes);

//Starting the server
app.listen(3001, function(){
	console.log('Servidor pronto');
});
