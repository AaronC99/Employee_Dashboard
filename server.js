var express = require('express');
var app = express();
var http = require('http');
var port = 8000;

app.use(express.static(__dirname + '/web/dist/COEEATS'));

var httpServer = http.createServer(app);

httpServer.listen(port, (err) => {

	if (err) {
		return console.log ('error', err)
	}
	console.log('Server is alive port '+ port);
});