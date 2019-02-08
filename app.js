const express = require('express'),
    logger = require('morgan'),
    cors = require('cors');

const indexRouter = require('./routes/index'),
    usersRouter = require('./routes/users');

const app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static('public'));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    res.status(404).send({error: 404});
    next();
});

module.exports = app;
