var express = require('express');
var router = express.Router();
var request = require("request");
// var fetch = require('node-fetch');

/* GET home page. */
router.get('/', function(req, res, next) {
    console.log("Get searchPubTransPath API request from " + req.query);
    // var _query = req.query.keyword;
    var options = { method: 'GET',
    				url: 'https://api.odsay.com/v1/api/searchPubTransPath/',
    				qs: { SX: req.query.sx, SY: req.query.sy, EX: req.query.ex, EY: req.query.ey, apiKey: 'jKcDCDSh9EgxEWo+AkEcrDY1jaHqHKslcsuVvLt00ow'},
    			}

  request(options, function (error, response, body) {
    if (error) throw new Error(error);
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");

    // console.log(body);
    res.json(body);
  });
});

router.get('/loadLane/', function(req, res, next) {
	console.log("Get loadLane API request from " + req.query.mapObj);
    var options = { method: 'GET',
    				url: 'https://api.odsay.com/v1/api/loadLane/',
    				qs: { mapObject: '0:0@' + req.query.mapObj, apiKey: 'jKcDCDSh9EgxEWo+AkEcrDY1jaHqHKslcsuVvLt00ow'},
    			}

    request(options, function (error, response, body) {
    	if (error) throw new Error(error);
    	res.header("Access-Control-Allow-Origin", "*");
    	res.header("Access-Control-Allow-Headers", "X-Requested-With");

    	// console.log(body);
    	res.json(body);
  });
})

module.exports = router;