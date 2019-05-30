var express = require('express');
var bodyParser = require('body-parser');
var mysql = require('mysql');
var mysqlSync = require('sync-mysql');
var expressLayouts = require('express-ejs-layouts');

var app = express();

// importing routes
const customerRoutes = require('./routes/routes');

app.set('view engine', 'ejs');
app.use(expressLayouts);
app.use(bodyParser.urlencoded({extended: true}));

var con = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'exercicio'
});

var conSync = new mysqlSync({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'exercicio'
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Conectado ao Banco de Dados");
});

// Routes
app.use('/', customerRoutes);


//Starting the server
app.listen(3000, function(){
	console.log('Servidor pronto');
});
