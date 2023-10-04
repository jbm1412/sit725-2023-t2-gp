const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://feedback:feedback@cluster1.j2mx6i9.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });

client.connect();

module.exports = client;