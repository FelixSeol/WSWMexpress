var express = require('express');
var router = express.Router();
var request = require("request");
// var fetch = require('node-fetch');

/* GET home page. */
router.get('/searchPlace', function(req, res, next) {
    let _keyword = req.query.keyword;
    let _coordinate = req.query.coordinate;
    let _radius = req.query.radius;
    let _x = _coordinate.split(',')[0]
    let _y = _coordinate.split(',')[1]
    // console.log(_coordinate[1]);
    console.log("REQ.QUERY.KEYWORD      : " + _keyword);
    console.log("REQ.QUERY.COORDINATE   : " + _coordinate);
    console.log("REQ.QUERY.DISTANCE     : " + _radius);
    console.log("REQ.QUERY.X(lon)       : " + _x);
    console.log("REQ.QUERY.Y(lat)       : " + _y);

    let options = { method: 'GET',
    url: 'https://dapi.kakao.com/v2/local/search/keyword.json',
    qs: { y: _y, x: _x, query: _keyword , radius: _radius, size: 5, sort: 'distance'},
    headers:
        {   'Authorization': 'KakaoAK eddb65c6ffd9f693777d35d9ff66e70e',
            'Cache-Control': 'no-store'} };


  request(options, function (error, response, body) {
    if (error) throw new Error(error);
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");

    console.log(options);
    console.log(body);
    res.json(body);
  });

});

module.exports = router;
