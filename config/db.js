http = require("http");
let mysql = require("mysql");

let connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123456",
  database: "messages",
  port: 3306,
});

connection.connect();

module.exports = connection;
