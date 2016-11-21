var bodyParser = require('body-parser');
var express = require('express');
var mongodb = require('mongodb').MongoClient;
//We need to work with "MongoClient" interface in order to connect to a mongodb server.

// Connection URL. This is where your mongodb server is running.
var url = 'mongodb://localhost:27017/bridgelabz';

var creatUserModel = require("../model/createUser.js");
var getUserModel = require("../model/getUser.js");
var updateUserModel = require("../model/updateUser.js")

var router = express.Router();

/***Post Request for creating new User and insert Data in mongoDB***/
router.post('/', function(req, res) {

    creatUserModel.createUser(mongodb, url, req.body, function(result) {
        res.send(result);
    });

}); //end of post

/****GET call is used to retreiving User data from mongoDB***/
router.get("/", function(req, res) {

    getUserModel.getUser(mongodb, url, req.body, function(result) {
        res.send(result);
    });
}); //end get call

/***PUT call is used to upadate the User data***/
router.put("/", function(req, res) {

    updateUserModel.updateUser(mongodb, url, req.body, function(result) {
        res.send(result);
    });
});

module.exports = router;
