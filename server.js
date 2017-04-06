//Setting up express and public directory
var express = require('express');
var app = express();
app.use(express.static(__dirname + '/public'))

//setting up server
var server = app.listen(3000, function() {
  var port = server.address().port;
  console.log('Server running at http://localhost:%s', port);
});
