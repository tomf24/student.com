var express = require('express'),
    app = express();

app.set('view engine', 'jade');
app.use('/', require('./routes/base'));
app.use(express.static('public'));

module.exports = app;
