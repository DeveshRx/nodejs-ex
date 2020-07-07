'use strict';
var debug = require('debug');
var express = require('express');
var cors = require('cors');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
const { resolve } = require("path");
// Replace if using a different env file or config
//const env = require("dotenv").config({ path: ".env" });
//const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

//   process.env.NODE_ENV = 'production';
var app = express();

// app.use(cors());
var allowedOrigins = ['http://ephrine.in',
  'http://localhost:1337',
  'http://localhost',
    'https://www.ephrine.in'];
app.use(cors({
    origin: function (origin, callback) {
        if (!origin) return callback(null, true);
        if (allowedOrigins.indexOf(origin) === -1) {
            var msg = 'NodeJS The CORS policy for this site does not ' +
                'allow access from the specified Origin.';
            return callback(new Error(msg), false);
        }
        return callback(null, true);
    }
}));

var routes = require('./routes/index');
var users = require('./routes/users');
var payment = require('./routes/payment');
var blog = require('./routes/blog');
var store = require('./routes/store');
var cors = require('./routes/cors');



// view engine setup
//app.set('views', path.join(__dirname, 'public'));
//app.set('view engine', 'html');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());

if (process.env.NODE_ENV === 'production') {
    // We are running in production mode
    console.log("We are running in production mode");
} else {
    // We are running in development mode
    console.log(" We are running in development mode");
}

//app.use(express.static('public'))
//app.use(express.static('files'))

app.use('/', routes);
app.use('/users', users);
app.use('/payment', payment);
app.use('/blog', blog);
app.use('/store', store);
app.use('/cors', cors);



// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


//var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080,
//    ip   = process.env.IP   || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';
//app.set('port', process.env.PORT || 3000);
var port = 8080,
    ip   = '0.0.0.0';

app.set('port', port || ip);

var server = app.listen(app.get('port'), function () {
    debug('Express server listening on port ' + server.address().port);
   

});
