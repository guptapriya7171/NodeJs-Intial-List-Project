var express = require('express');
router = express.Router();

router.get("/", function(req,res,next){
   res.send("Nodejs RESTful API get method is working");
});

router.post("/addCatalogue", function(req,res,next){
    res.send("Nodejs RESTful API post method is working");
 });

router.put("/addUpdateCatalogue", function(req,res,next){
    res.send("Nodejs RESTful API put method is working");
});

router.patch("/UpdateCatalogue", function(req,res,next){
    res.send("Nodejs RESTful API patch method is working");
});

router.delete("/DeleteCatalogue", function(req,res,next){
    res.send("Nodejs RESTful API delete method is working");
});




 

module.exports = router;