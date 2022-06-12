const bcdata = require("./data");
const res = require("express/lib/response");
const { MongoClient } = require("mongodb");

require("dotenv").config();
const { MONGO_URI } = process.env;
const {v4: uuidv4 } = require("uuid");

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };

const batchImport = async () => {
    const client = new MongoClient(MONGO_URI, options)

    try {
        await client.connect();

    const db = client.db("beatclash");
    console.log("connected!");

    // reset database
    // await db.collection("threads").drop();
    // await db.collection("users").drop();

    await db.collection("users").insertMany(bcdata.users);
    await db.collection("threads").insertMany(bcdata.threads);

    console.log("success!");
    

    }catch (err) {
        console.log(err.stack);
    }

    client.close();
    console.log("disconnected!");

}

batchImport();

module.exports = { batchImport };