const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  //  let device_list =[{'name': 'dht22'}, {'name': 'tmp36'}]
  const db = client.db(dbName);
    //finding documents
const collection = db.collection['devices'];
collection.find({}).toArray(function(err,device_list) {
    assert.equal(err, null);
   // console.log("found the following records");
   // console.log(docs)
    //callback(docs);

    res.render('devices', {'devices' : device_list})
});


})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})


//this is what was in the video but i was getting errors; probably because i didnt have a few things installed; he got it
//off the mongodb website but theres a new version of it and thats the one thats below

/* const  MongoClient = require("mongodb").MongoClient;
const assert = require ('assert')

//connection uri
const uri =
  "mongodb+srv://<user>:<password>@<cluster-url>?retryWrites=true&writeConcern=majority";

//database name
const dbName = 'mydb';

//create a new mongoClient
const client = new MongoClient(uri);

//use connect method to connect to the server
client.connect(fucntion(err) {
    assert.equal(null, err);
    console.log("connected successfully to the server");

    const db= client.db(dbName);
    client.close();
});


*/

//this is the code that is now on the mongodb website; the one above is from the time the video was created

const { MongoClient } = require("mongodb");
const { assert } = require('node:console')
// Replace the uri string with your MongoDB deployment's connection string.
const uri =
  "mongodb://USERNAME:PASSWORD@mdblockchain.provendb.io/mdblockchain?ssl=true";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
async function run() {
  try {
    await client.connect();
    app.listen(port, () => {     //this should happen after connection
        console.log(`Example app listening at http://localhost:${port}`)
      })
    //const database = client.db('sample_mflix');
    const movies = database.collection('movies');
    // Query for a movie that has the title 'Back to the Future'
    const query = { title: 'Back to the Future' };
    const movie = await movies.findOne(query);
    console.log(movie);
  } finally {
    // Ensures that the client will close when you finish/error
  //  await client.close();
  }
}
run().catch(console.dir);

export default app;
