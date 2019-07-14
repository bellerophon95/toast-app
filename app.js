//Libraries
const
  createError = require('http-errors'),
  express = require('express'),
  path = require('path'),
  cors = require('cors'),
  bodyParser = require('body-parser'),
  cookieParser = require('cookie-parser'),
  logger = require('morgan');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(bodyParser.json());
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//Routers
app.use('/', require('./routes'));

//Error Handler
app.use(function (err, req, res, next) {
  // render the error page
  res.status(err.status || 500);

  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.render('error');
  next();
});

module.exports = app;
