var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const compression = require('compression');
const cors = require('cors');
const dbConnect = require('./database');

var usersRouter = require('./routes/users');
var vehiclesRouter = require('./routes/vehicles');

var app = express();

dbConnect();

app.use(cors()); // CORS -> permitimos requests de cualquier origen ya que no le pasamos ningun dominio especifico por parametro
app.use(compression()); // comprime los mensajes
app.use(logger('dev')); // Loggea en consola datos de los req
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

/** 
* json() ->  parsea body a JSON y ademas
* valida si el formato es válido.
* es un middleware.
*/
app.use(express.json({
  verify: (req, res, buf, encoding) => {
      try {
          JSON.parse(buf);
      } catch {
          res.status(400).json({ error: 'Invalid JSON' });
      }
  }
}));

app.use('/api/v1', usersRouter);
app.use('/api/v1', vehiclesRouter);

/**
* Esta ruta get * va a atrapar todos los req a rutas no existentes
* El caracter * significa "ALL", si lo ponemos antes que nuestros Routers
* atraparía todos los req, por eso lo declaramos despues.
*/
app.get('*', function (req, res) {
  res.status(404).json({
      error: 'Route Not Found'
  });
});

module.exports = app;
