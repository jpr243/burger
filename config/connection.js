//Dependency
var mysql = require("mysql");

//Connection
connection = mysql.createConnection(process.env.JAWSDB_URL);

//start connection to database
connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id" + connection.threadId);
});
module.exports = connection;
