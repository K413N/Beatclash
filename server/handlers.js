"use strict"
const { MongoClient, ObjectId } = require("mongodb");
require("dotenv").config();
const { MONGO_URI } = process.env;
const res = require("express/lib/response");

// id generator
const { v4: uuidv4 } = require("uuid");

// get all the user _ids on the website
const getUsers = async (req, res) => {
    const client = new MongoClient(MONGO_URI);

  try {
    await client.connect();

    const db = client.db("beatclash");
    console.log("connected!");

    const userObjs = await db.collection("users").find().toArray();


    const userIds = userObjs.map(element => {
      return element._id;
    })

    

    console.log(users);

    res.status(200).json({ status: 200, message: "success", data: userIds });
  } catch (err) {
    console.log(err.stack);
    res.status(500).json({ status: 500, data: req.body, message: err.message });
  }
  client.close();
  console.log("disconnected!");
}

// get all friends of a user
const getFriends = async (req, res) => {
  const client = new MongoClient(MONGO_URI);
  
  try {
    await client.connect();

    const db = client.db("beatclash");
    console.log("connected!");

    // get the user to pull all friends from
    const userId = req.params._id;
    const userObj = await db.collection("users").findOne({ "_id": userId });

    client.close();
    console.log("disconnected!");

    return res.status(200).json({ status: 200, data: userObj.friends });

  } catch (err) {
    console.log(err.stack);
    res.status(500).json({ status: 500, data: req.body, message: err.message });
  }
}

// get a single user's information
const getUser = async (req, res) => {
  const client = new MongoClient(MONGO_URI);
  
  try {
    await client.connect();

    const db = client.db("beatclash");
    console.log("connected!");

    // get the user to pull all friends from
    const userId = req.params._id;
    const userObj = await db.collection("users").findOne({ "_id": userId });

    client.close();
    console.log("disconnected!");

    return res.status(200).json({ status: 200, data: userObj });

  } catch (err) {
    console.log(err.stack);
    res.status(500).json({ status: 500, data: req.body, message: err.message });
  }
}

const getThreads = async (req, res) => {
  const client = new MongoClient(MONGO_URI);

  try {
    await client.connect();

    const db = client.db("beatclash");
    console.log("connected!");

    const threads = await db.collection("threads").find().toArray();

    const threadIds = threads.map((element) => {
      return element._id;
    })

    res.status(200).json({ status: 200, message: "success", data: threadIds });
  } catch (err) {
    console.log(err.stack);
    res.status(500).json({ status: 500, data: req.body, message: err.message });
  }
  client.close();
  console.log("disconnected!");
}

const getThread = async (req, res) => {
  const client = new MongoClient(MONGO_URI);
  
  try {
    await client.connect();

    const db = client.db("beatclash");
    console.log("connected!");

    // get the thread to pull all posts from
    const threadId = req.params._id;
    const threadObj = await db.collection("threads").findOne({ "_id": threadId });

    client.close();
    console.log("disconnected!");

    return res.status(200).json({ status: 200, data: threadObj });

  } catch (err) {
    console.log(err.stack);
    res.status(500).json({ status: 500, data: req.body, message: err.message });
  }
}
//////////////////////////////////////
// FIX UPDATING THE USER'S POST ARRAY
//////////////////////////////////////
const createThread = async (req, res) => {

  // Takes op, threadTitle, and body
  // then grabs boardId from params
  // creates one item to push all data
  // into a thread object on the database

  const { op, threadTitle, body } = req.body;
  const boardId = req.params.boardId;

  if( !boardId || !op || !threadTitle || !body) {
    return res.status(400).json({
      status: 400,
      message: "Not all required data fields have been filled.",
    });
  } else {
    const client = new MongoClient(MONGO_URI);

    try {
      await client.connect();
      const db = client.db("beatclash");
      console.log("connected!");

      const newThread = {...req.body}

      newThread._id = uuidv4();
      newThread.likes = 0;
      newThread.dislikes = 0;
      newThread.date = "06/12/2022",
      newThread.tags = [];
      newThread.posts = [];

      console.log(newThread);

      // insert new thread with id into the database
      const result = await db.collection("threads").insertOne(newThread);


      // TO DO: update list of user's posts
      // const userPosts = await db.collection("users").findOneAndUpdate();

      return res.status(201).json({ status: 201, data: newThread, message: "Thread successfully added to database!"});

    } catch (err) {
      console.log(err.stack);
      res.status(500).json({ status: 500, message: err.message });
    }
    client.close();
    console.log("disconnected!");
  }
}

module.exports = {
  getUsers,
  getFriends,
  getUser,
  getThreads,
  getThread,
  createThread,
  // createReply,
  // addUser,
  // updateThread,
  // updateReply,
  // deleteThread,
  // deleteReply
}