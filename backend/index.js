var express = require('express');
var cors = require('cors');
var responseTime = require('response-time');
var logger = require('morgan');

var carts = require('./carts');
var app = express();

// Enable CORS for frontend communication
app.use(cors({
  origin: process.env.FRONTEND_URL || '*',
  credentials: true
}));

// Adds an X-Response-Time header to responses to measure response times
app.use(responseTime());

// logs all HTTP requests. The "dev" option gives it a specific styling
app.use(logger('dev'));

// Sets up the response object in routes to contain a body property with an object of what is parsed from a JSON body request payload
app.use(express.json());

// Health check endpoint
app.get('/health', function (req, res) {
  res.status(200).json({ status: 'healthy', service: 'backend' });
});

// Rest API routes
app.use('/api/carts', carts);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// development error handler that will add in a stacktrace
if (app.get('env') === 'development') {
  app.use(function (err, req, res, next) { // eslint-disable-line no-unused-vars
    if (err.status)
      res.status(err.status).json({ message: err.toString(), error: err });
    else
      res.status(500).json({ message: err.toString(), error: err });
    console.log(err);
  });
}

// production error handler with no stack traces exposed to users
app.use(function (err, req, res, next) { // eslint-disable-line no-unused-vars
  console.log(err);
  if (err.status)
    res.status(err.status).json({ message: err.toString(), error: {} });
  else
    res.status(500).json({ message: err.toString(), error: {} });
});

app.set('port', process.env.PORT || 5000);

var server = app.listen(app.get('port'), function () {
  console.log('Backend API server listening on port ' + server.address().port);
});

module.exports = server;
