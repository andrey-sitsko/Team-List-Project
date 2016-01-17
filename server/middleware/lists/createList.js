User = require('../../models/userModel.js');

module.exports = function(req, res) {
  var email = req.user.email,
      listData = req.body;

  User.findOne({email: email}, function (err, user) {
    user.lists.push({title: listData.title, id: listData.id});

    user.save(function (err) {
      if(err) {
        res.send({success: false});
      }
      res.send({success: true});
    });
  });
};
