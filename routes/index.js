var express = require('express');
var router = express.Router();
var request = require("request");
// var fetch = require('node-fetch');

/* GET home page. */
router.get('/', function(req, res, next) {
    console.log("REQ.QUERY.KEYWORD : " + req.query.keyword);
    console.log("REQ.QUERY.COORDINATE : " + req.query.coordinate);

    var _query = req.query.keyword;
    var _coordinate = req.query.coordinate;
    // console.log(_coordinate[0]);
    // console.log(_coordinate[1]);

    var options = { method: 'GET',
    url: 'https://naveropenapi.apigw.ntruss.com/map-place/v1/search',
    qs: { query: _query, coordinate: _coordinate },
    headers:
        { 'X-NCP-APIGW-API-KEY': 'KyJQ1dl1gU6an8IalWdW428EmOYChrwzS30GEtVP',
          'X-NCP-APIGW-API-KEY-ID': 'sx4y6v49bc' } };

  request(options, function (error, response, body) {
    if (error) throw new Error(error);
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");

    console.log(body);
    res.json(body);
  });

});

module.exports = router;
