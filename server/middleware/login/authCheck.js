module.exports.login = function (req, res) {
    if (req.user) {
        res.redirect('/main');
    } else {
        res.render('./loginView.html');
    }
};

module.exports.main = function (req, res) {
    if (req.user) {
        res.render('./mainView.html');
    } else {
        res.redirect('/');
    }
};
