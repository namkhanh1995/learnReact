const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = require('../config/db.config').url;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

// client.connect(err => {
//     const collection = client.db("sample_mflix").collection("comments");
//     var query = { name: "Mercedes Tyler" };
//     collection.find({}).toArray(function (err,data){
//         if (err) throw err;
//         console.log(data);
//         client.close();
//     })
// });
let dbConnection;
module.exports = {
    connectToServer: function (callback) {
      client.connect(function (err, db) {
        if (err || !db) {
          return callback(err);
        }
  
        dbConnection = client.db("sample_airbnb");
        console.log("Successfully connected to MongoDB.");
  
        return callback();
      });
    },
  
    getDb: function () {
      return dbConnection;
    },
  };
