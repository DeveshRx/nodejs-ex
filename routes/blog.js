'use strict';
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res) {
    // res.send('respond with a resource');
    res.sendFile(path.join(__dirname + '/about.html'));

    console.log("blog Pages");
});


router.get('/:id', function (req, res) {
    // res.render('index', { title: 'Express' });
    //res.sendFile(path.join(__dirname + '/index.html'));
    res.send('The id you specified is ' + req.params.id);

});

module.exports = router;
