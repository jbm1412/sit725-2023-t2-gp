let express = require('express');
let app = express();
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://feedback:feedback@cluster1.j2mx6i9.mongodb.net/?retryWrites=true&w=majority";
let port = process.env.port || 3000;
let feedbackcollection;

app.use(express.static(__dirname + '/'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function dbConnection() {
  try {
    await client.connect();
    feedbackcollection = client.db().collection('Feedback');
    console.log("Connected Successfully");
  } catch (err){
    console.error(err)
  } 
}

app.post('/api/feedback', (request, response) => {
    let feedback = request.body;
    postFeedback(feedback, (error, result) => {
        if (!error){
            response.json({statusCode:200, data:result, message:'success'});
        }
    });
})

function postFeedback(feedback, callback) {
    feedbackcollection.insertOne(feedback, callback);
}

app.listen(port, function() {
    console.log("Web server running at: http://localhost:3000");
    console.log("Type Ctrl+C to shut down the web server");
    dbConnection();
});
    
