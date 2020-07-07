'use strict';
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res) {
    // res.send('respond with a resource');
    res.sendFile(path.join(__dirname + '/cors/index.html'));

    console.log("Users Pages");
});

router.get('/check', function (req, res) {
    // res.send('respond with a resource');
    var i = "CORS Enable";
    res.send({ i });

});
module.exports = router;
