var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const authUtil = require('./util/authUtils');

var indexRouter = require('./routes/index');
const klientRouter = require('./routes/KlientRoute');
const polisaRouter = require('./routes/PolisaRoute');
const samochodRouter = require('./routes/SamochodRoute');
const KlientApiRouter = require('./routes/api/KlientApiRouter');
const PolisaApiRouter = require('./routes/api/PolisaApiRouter');
const SamochodApiRouter = require('./routes/api/SamochodApiRouter');

const sequelizeInit = require('./config/sequelize/init');

const session = require('express-session');
const { permitAuthenticatedUser } = require('./util/authUtils');

sequelizeInit()
    .catch(err => {
        console.log(err);
    });

var app = express();

//Obsługa sesji

app.use(session({
    secret: 'my_secret_password',
    resave: false
}));

const i18n = require('i18n');
i18n.configure({
   locales: ['pl', 'en'], // języki dostępne w aplikacji. Dla każdego z nich należy utworzyć osobny słownik 
   directory: path.join(__dirname, 'locales'), // ścieżka do katalogu, w którym znajdują się słowniki
   objectNotation: true, // umożliwia korzstanie z zagnieżdżonych kluczy w notacji obiektowej
   cookie: 'acme-hr-lang', //nazwa cookies, które nasza aplikacja będzie wykorzystywać do przechowania informacji o języku aktualnie wybranym przez użytkownika
});

app.use(cookieParser('secret'));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
  const loggedUser = req.session.loggedUser;
  res.locals.loggedUser = loggedUser;
  if(!res.locals.loginError) {
      res.locals.loginError = undefined;
  }
  next();
});

app.use('/', indexRouter);
app.use('/klient', klientRouter);
app.use('/polisa', polisaRouter);
app.use('/samochod', samochodRouter);
app.use('/api/klient', KlientApiRouter);
app.use('/api/polisa', PolisaApiRouter);
app.use('/api/samochod', SamochodApiRouter);

app.use('/klient', authUtil.permitAuthenticatedUser, klientRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
