function config(app) {
  var express = require('express');
  app.use('/components', express.static(__dirname + '/app/components'));
  app.use('/public', express.static(__dirname + '/app/public'));
  app.use('/assets', express.static(__dirname + '/app/assets'));
  app.use('/node_modules', express.static(__dirname + '/node_modules'));

  app.use('/headerView.html', express.static(__dirname + '/app/components/header/headerView.html'));
  app.use('/signInView.html', express.static(__dirname + '/app/components/signIn/signInView.html'));
  app.use('/signUpView.html', express.static(__dirname + '/app/components/signUp/signUpView.html'));

  app.set('views', __dirname + '/app/views');
  app.engine('html', require('ejs').renderFile);

  return app;
}

module.exports = config;
