var express = require('express'),
app = express(),
path = require('path'),
http = require('http').Server(app),
io = require('socket.io')(http);
app.use('/static',express.static(path.join(__dirname, '/public')));
app.get('/', function(req, res){
	console.log("get");
  res.sendFile(__dirname + '/index.html');
});


io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
