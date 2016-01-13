var passport = require('passport');

module.exports = function isAuthenticated(req, res, next) {
    if (req.user) {
        return next();
    }
    res.redirect('/');
};
