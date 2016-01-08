var express = require('express'),
    path = require('path'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    serverConfig = require('./server/config/serverConfig.js'),
    databaseConfig = require('./server/config/databaseConfig.js'),
    loginRoutes = require('./server/routes/loginRoutes'),
    app;

app = express();
app = serverConfig(app);
app = loginRoutes(app);
mongoose.connect(databaseConfig.url);

app.listen(8080);
