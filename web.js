var express = require('express');

var app = express.createServer(express.logger());

fs = require("fs");

app.get('/', function(request, response) {
  response.send(fs.readFileSync('index.html','utf8'));
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
