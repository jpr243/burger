var connection = require("../config/connection");

//Helper Functions to run functions in queries set up below
function createQmarks(num) {
    var arr = [];
    for(var i = 0; i < num; i++) {
        arr.push("?");
    }
    return arr.toString();
}

//Translates string to SQL
function translateSQL(obj) {
    var arr = [];
    for(var key in obj) {
        var value = ob[key];
        if (Object.hasOwnProperty.call(ob, key)) {
            if(typeof value === "string" && value.indexOf(" ") >= 0){
                value = "'" + value + "'" ;
            }
            arr.push(key + "=" + value)
        }
    }
    return arr.toString();
}

var orm = {
  selectAll: function(table, cb) {
    var dbQuery = "SELECT * FROM " + table + ";";

    connection.query(dbQuery, function(err, res) {
      if (err) {
        throw err;
      }
      cb(res);
    });
  },

  //Insert Query
  insertOne: function(table, cols, vals, cb) {
      var dbQuery = "INSERT INTO " + table + " (" + cols.toString() + ") " + "VALUES (" + createQmarks(vals.length) + ") ";

      console.log(dbQuery);
      connection.query(dbQuery, vals, function(err, res) {
        if (err) {
          throw err;
        }
        cb(res);
      });
  },
  //Update Query
  updateOne: function(table, objColVals, condition, cb) {
        var dbQuery = "UPDATE " + table + " SET " + translateSQL(objColVals) + " WHERE " + condition;
 
        console.log(dbQuery);
        connection.query(dbQuery, vals, function(err, res) {
          if (err) {
            throw err;
          }
          cb(res);
        });
    },
//Delete Query
deleteOne: function(table, condition, cb){
    var dbQuery = "DELETE FROM " + table + " WHERE " + condition;

    console.log(dbQuery);
        connection.query(dbQuery, vals, function(err, res) {
          if (err) {
            throw err;
          }
          cb(res);
        });

}
};
