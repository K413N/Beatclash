const bcdata = require("./data");
const res = require("express/lib/response");
const { MongoClient } = require("mongodb");

require("dotenv").config();
const { MONGO_URI } = process.env;
// const {v4: uuidv4 } = require("uuid");


const batchImport = async () => {
    const client = new MongoClient(MONGO_URI)

    try {
        await client.connect();

    const db = client.db("beatclash");
    console.log("connected!");

    // reset database
    //
    // if the batch import doesn't work
    // comment out the drops
    // it will throw an error
    // if it tries to drop data that
    // does not exist

    await db.collection("threads").drop();
    await db.collection("users").drop();

    await db.collection("users").insertMany(bcdata.users);
    await db.collection("threads").insertMany(bcdata.threads);

    console.log("success!");
    

    } catch (err) {
        console.log(err.stack);
    }

    client.close();
    console.log("disconnected!");

}

batchImport();

module.exports = { batchImport };