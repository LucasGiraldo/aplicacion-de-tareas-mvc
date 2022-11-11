//Configuracion de mongo
const { MongoClient } = require("mongodb");

const uri =
  "mongodb+srv://giraldolucas:giraldolucas@cluster0.l3m2jcc.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);

client
  .connect()
  .then(() => {
    console.log("Database connected successfully");
  })
  .catch((error) => {
    console.log("Database error connection: ", error);
  });

module.exports = client;
