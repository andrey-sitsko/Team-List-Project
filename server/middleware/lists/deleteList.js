User = require('../../models/userModel.js');

module.exports = function(req, res) {
  var email = req.user.email,
      listData = req.body;

  User.findOne({email: email}, function (err, user) {
    user.lists.splice(user.lists.map(function(list) {
      return list.id;
    }).indexOf(listData.id), 1);
    user.save(function (err) {
      if(err) {
        res.send({success: false, err: err});
      } else {
        res.send({success: true});
      }
    });
  });
};
