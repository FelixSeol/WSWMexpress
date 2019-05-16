var express = require('express');
var router = express.Router();
var request = require("request");
// var fetch = require('node-fetch');

/* GET home page. */
router.get('/searchPlace', function(req, res, next) {
    var _keyword = req.query.keyword;
    var _coordinate = req.query.coordinate;
    var _radius = req.query.radius;
    var _x = _coordinate.split(',')[0]
    var _y = _coordinate.split(',')[1]
    // console.log(_coordinate[1]);
    console.log("REQ.QUERY.KEYWORD      : " + _keyword);
    console.log("REQ.QUERY.COORDINATE   : " + _coordinate);
    console.log("REQ.QUERY.DISTANCE     : " + _radius);
    console.log("REQ.QUERY.X(lon)       : " + _x);
    console.log("REQ.QUERY.Y(lat)       : " + _y);

    var options = { method: 'GET',
    url: 'https://dapi.kakao.com/v2/local/search/keyword.json',
    qs: { y: _y, x: _x, query: _keyword , radius: _radius, size: 10},
    headers:
        { 'Authorization': 'KakaoAK eddb65c6ffd9f693777d35d9ff66e70e' } };

  request(options, function (error, response, body) {
    if (error) throw new Error(error);
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");

    console.log(body);
    res.json(body);
  });

});

module.exports = router;
