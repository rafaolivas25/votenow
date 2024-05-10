var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

/*
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/usersRoutes');
var perguntasRouter = require('./routes/perguntasRoutes');
var respostasRouter = require('./routes/respostasRoutes');
var tipousersRouter = require('./routes/tipousersRoutes');
var pergrespsRouter = require('./routes/perg_respRoutes');
*/

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//utilizador
const utilizador = require('./routes/utilizador')

app.get('/utilizador',utilizador.getutilizador)

//perguntas
const pergunta = require('./routes/pergunta')

app.get('/pergunta',pergunta.getpergunta)

//resposta
const resposta = require('./routes/resposta')

app.get('/resposta',resposta.getresposta)

//tipo de utilizador
const tipo = require('./routes/tipo')

app.get('/tipo',tipo.gettipo)



/*
app.use('/', indexRouter);
app.use('/api/users', usersRouter);
app.use('/api/perguntas', perguntasRouter);
app.use('/api/respostas', respostasRouter);
app.use('/api/tipousers', tipousersRouter);
app.use('/api/pergresp', pergrespsRouter);
*/
module.exports = app;
