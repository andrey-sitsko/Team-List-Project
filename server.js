var express = require('express'),
    path = require('path'),
    app = express();

app.use('/components', express.static(__dirname + '/app/components'));
app.use('/public', express.static(__dirname + '/app/public'));
app.use('/assets', express.static(__dirname + '/app/assets'));
app.use('/node_modules', express.static(__dirname + '/node_modules'));

app.use('/headerView.html', express.static(__dirname + '/app/components/header/headerView.html'));
app.use('/signInView.html', express.static(__dirname + '/app/components/signIn/signInView.html'));
app.use('/signUpView.html', express.static(__dirname + '/app/components/signUp/signUpView.html'));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/app/views/loginView.html'));
});

app.listen(8080);
