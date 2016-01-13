var User = require('../../models/userModel.js');

module.exports = function(req, res) {
  req.session.destroy();
  req.logout();
  res.redirect('/');
};
