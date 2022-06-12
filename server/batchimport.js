const fdata = require("./data");
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

    const db = client.db("slingair");
    console.log("connected!");

    const flight1 = [{ _id: uuidv4(), flight: "SA231", seats: fdata.flights.SA231 }];
    const flight2 = [{ _id: uuidv4(), flight: "SA232", seats: fdata.flights.SA232 }];

    // reset database
    await db.collection("flights").drop();
    await db.collection("reservations").drop();

    await db.collection("flights").insertMany(flight1);
    await db.collection("flights").insertMany(flight2);
    await db.collection("reservations").insertMany(fdata.reservations);

        console.log("success!");
    

    }catch (err) {
        console.log(err.stack);
    }

    client.close();
    console.log("disconnected!");

}

batchImport();

module.exports = { batchImport };