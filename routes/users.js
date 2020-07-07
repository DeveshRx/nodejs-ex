'use strict';
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res) {
    // res.send('respond with a resource');
    res.sendFile(path.join(__dirname + '/index.html'));

    console.log("Users Pages");
});

module.exports = router;
