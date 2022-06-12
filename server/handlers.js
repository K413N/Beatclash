"use strict"
const { MongoClient, ObjectId } = require("mongodb");
require("dotenv").config();
const { MONGO_URI } = process.env;
const res = require("express/lib/response");

// id generator
const { v4: uuidv4 } = require("uuid");

const options = {
    useNewUrlParse: true,
    useUnifiedTopology: true,
};

const getUsers = async (req, res) => {
    const client = new MongoClient(MONGO_URI, options);

  try {
    await client.connect();

    const db = client.db("beatclash");
    console.log("connected!");

    const result = await db.collection("users").find().toArray();

    const users = result.map((element) => {
      return element._id;
    });

    console.log(users);

    res.status(200).json({ status: 200, message: "success", data: users });
  } catch (err) {
    console.log(err.stack);
    res.status(500).json({ status: 500, data: req.body, message: err.message });
  }
  client.close();
  console.log("disconnected!");
}


module.exports = {
getUsers
    // getFriends,
    // getUser,
    // getThreads,
    // getThread,
    // createThread,
    // createReply,
    // addUser,
    // updateThread,
    // updateReply,
    // deleteThread,
    // deleteReply
}