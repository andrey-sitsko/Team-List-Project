var express = require('express'),
    path = require('path'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    cookieSession = require('cookie-session'),
    passport = require('passport'),
    session = require('express-session'),
    serverConfig = require('./server/config/serverPathConfig.js'),
    databaseConfig = require('./server/config/databaseConfig.js'),
    passportConfig = require('./server/config/passportConfig.js'),
    loginRoutes = require('./server/routes/loginRoutes'),
    app;

mongoose.connect(databaseConfig.url);

app = express();
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(session({ secret: 'keyboard cat', resave: false, saveUninitialized: false}));
app.engine('html', require('ejs').renderFile);

passport = passportConfig(passport);
app.use(passport.initialize());
app.use(passport.session());

app = serverConfig(app);
app = loginRoutes(app);

app.listen(8000);
