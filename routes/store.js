'use strict';
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res) {
    // res.send('respond with a resource');
    console.log("Shop Pages");

    res.sendFile(path.join(__dirname + '/store/index.html'));

});

module.exports = router;
