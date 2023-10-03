let express = require('express');
let app = express();
require('./dbConnection');
let router = require('./router/rtr');
let port = process.env.port || 3000;

app.use(express.static(__dirname + '/'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use('/api/feedback', router);

app.listen(port, function() {
    console.log("Web server running at: http://localhost:3000");
    console.log("Type Ctrl+C to shut down the web server");
});
    
