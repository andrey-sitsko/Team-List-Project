var express = require('express'),
    path = require('path'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    serverConfig = require('./server/config/serverConfig.js'),
    databaseConfig = require('./server/config/databaseConfig.js'),
    app;

app = express();
app = serverConfig(app);
mongoose.connect(databaseConfig.url);

app.get('/', function(req, res) {
    res.render('loginView.html');
});

app.listen(8080);
