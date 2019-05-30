var express = require('express');
var bodyParser = require('body-parser');
var mysql = require('mysql');
var mysqlSync = require('sync-mysql');
var expressLayouts = require('express-ejs-layouts');

var app = express();

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

app.get('/',function(req,res){
	res.render('teste');
});

app.listen(3000, function(){
	console.log('Servidor pronto');
});
