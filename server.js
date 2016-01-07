var express = require('express'),
    path = require('path'),
    config = require('./config/serverConfig.js'),
    app = express();

app = config(app);

app.get('/', function(req, res) {
    res.render('loginView.html');
});

app.listen(8080);
