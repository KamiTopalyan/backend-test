const express = require('express');
const cors = require("cors")
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const todosRouter = require('./routes/todos');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(cors({
    origin: '*'
}))
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '..', 'public')));

// Routes
app.use('/todos', todosRouter);


module.exports = app;
