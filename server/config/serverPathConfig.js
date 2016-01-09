function config(app) {
  var express = require('express');
  
  app.use('/share', express.static('./app/share'));
  app.use('/components', express.static('./app/share/components'));
  app.use('/builtApps', express.static('./app/builtApps'));
  app.use('/assets', express.static('./app/share/assets'));
  app.use('/node_modules', express.static('./node_modules'));

  app.use('/headerView.html', express.static('./app/share/components/header/headerView.html'));
  app.use('/signInView.html', express.static('./app/share/components/signIn/signInView.html'));
  app.use('/signUpView.html', express.static('./app/share/components/signUp/signUpView.html'));
  app.set('views', './app/views');

  return app;
}

module.exports = config;
