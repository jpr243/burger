var mysql = require("mysql");
connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "OliverHank6",
  database: "burger_db"
});
//start connection to database
connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id" + connection.threadId);
});
module.exports = connection;
