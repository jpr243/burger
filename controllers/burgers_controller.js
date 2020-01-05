//Connections
var express = require("express");
var burger = require("../models/burger");

//Router connections
var router = express.Router();

//Get Router
router.get("/", function(req, res) {
  burger.selectAll(function(data) {
    //handlebars object
    var hdbrsObj = {
      burgers: data
    };
    console.log(hdbrsObj);
    res.render("index", hdbrsObj);
  });
});

//Post Router
router.post("/", function(req, res) {
  burger.insertOne(
    ["burger_name", "devoured"],
    [req.body.burger_name, req.body.devoured],
    function() {
      //Send back the ID of new burger
      res.redirect("/");
    }
  );
});

//Put Router
router.put("/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  burger.updateOne(
    {
      devoured: req.body.devoured
    },
    condition,
    function() {
      res.redirect("/");
    }
  );
});
//Delete Router
router.delete("/:id", function(req, res) {
  var condition = "id = " + req.params.id;
  console.log("condition", condition);

  burger.deleteOne(condition, function() {
    res.redirect("/");
  });
});

module.exports = router;
