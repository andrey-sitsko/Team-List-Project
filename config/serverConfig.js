function config(app) {
  var express = require('express');
  app.use('/components', express.static('./app/components'));
  app.use('/public', express.static('./app/public'));
  app.use('/assets', express.static('./app/assets'));
  app.use('/node_modules', express.static('./node_modules'));

  app.use('/headerView.html', express.static('./app/components/header/headerView.html'));
  app.use('/signInView.html', express.static('./app/components/signIn/signInView.html'));
  app.use('/signUpView.html', express.static('./app/components/signUp/signUpView.html'));

  app.set('views', './app/views');
  app.engine('html', require('ejs').renderFile);

  return app;
}

module.exports = config;
