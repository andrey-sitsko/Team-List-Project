var express = require('express'),
    path = require('path'),
    app = express();

app.use("/app", express.static(__dirname + '/app'));
app.use("/node_modules", express.static(__dirname + '/node_modules'));

app.listen(8080);
