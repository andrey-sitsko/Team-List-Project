var passport = require('passport');

module.exports = function isAuthenticated(req, res, next) {
    console.log(req.user);
    if (req.user) {
        return next();
    }
    res.redirect('/');
};
