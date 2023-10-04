let express = require('express');
let app = express();
require('./dbConnection');
let router = require('./router/rtr');
let port = process.env.port || 3000;
let http = require('http').createServer(app);


app.use(express.static(__dirname + '/'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use('/api/feedback', router);

let io = require('socket.io')(http);
io.on('connection', function(){
    console.log('client connected')
});




// io.on('connection', (socket) => {
// console.log('a user connected');
// socket.on('disconnect', () => {
// console.log('user disconnected');
// });
// setInterval(()=>{
//     socket.emit('number', console.log('success'));
//     });
// });


http.listen(port, function() {
    console.log("Web server running at: http://localhost:3000");
    console.log("Type Ctrl+C to shut down the web server");
});


    
