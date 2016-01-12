var User = require('../../models/userModel.js');

module.exports = function(req, res) {
  var newUser = new User({
    name: req.body.name,
    password: req.body.password,
    email: req.body.email
  });
  User.find({email: newUser.email}, function(err, user) {
    if(err) {
      throw err;
    }
    if(user.length) {
      res.send({success: false, status: 'already exist'});
    } else {
      newUser.save(function(err) {
        if (err) {
          throw err;
        }
      });
      res.send({success: true, status: 'user created'});
    }
  });
};
