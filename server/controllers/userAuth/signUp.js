var User = require('../../models/userModel.js');

module.exports = function(req, res) {
  var user = new User({
    name: req.body.name,
    password: req.body.password,
    email: req.body.email
  });
  user.save(function(err) {
    if (err) throw err;
  });
};
