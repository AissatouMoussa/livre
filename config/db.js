
http = require('http');
let mysql      = require('mysql');


let connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'livreor'
});
 
connection.connect()

module.exports = connection