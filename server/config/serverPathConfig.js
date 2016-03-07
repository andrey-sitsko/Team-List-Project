function config(app) {
  var express = require('express');

  app.use('/share', express.static('./app/share'));
  app.use('/components', express.static('./app/share/components'));
  app.use('/builtApps', express.static('./app/builtApps'));
  app.use('/assets', express.static('./app/share/assets'));
  app.use('/node_modules', express.static('./node_modules'));

  app.use('/pageHeaderView.html', express.static('./app/share/components/common/pageHeader/pageHeaderView.html'));
  app.use('/signInView.html', express.static('./app/share/components/login/signIn/signInView.html'));
  app.use('/signUpView.html', express.static('./app/share/components/login/signUp/signUpView.html'));
  app.use('/userInfoView.html', express.static('./app/share/components/main/userInfo/userInfoView.html'));
  app.use('/listsView.html', express.static('./app/share/components/main/lists/listsView.html'));
  app.use('/taskSettingsView.html', express.static('./app/share/components/main/taskSettings/taskSettingsView.html'));
  app.use('/tasksView.html', express.static('./app/share/components/main/tasks/tasksView.html'));

  app.set('views', './app/views');

  return app;
}

module.exports = config;
