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

// get all threads on a board.
const getThreads = async (req, res) => {
  const client = new MongoClient(MONGO_URI);
  const boardId = req.params.boardId;

  try {
    await client.connect();

    const db = client.db("beatclash");
    console.log("connected!");

    console.log(boardId);

    const threads = await db.collection("threads").find({ "boardId": boardId }).toArray();

    // const threadIds = threads.map((element) => {
    //   return element._id;
    // })

    res.status(200).json({ status: 200, message: "success", data: threads });
  } catch (err) {
    console.log(err.stack);
    res.status(500).json({ status: 500, data: req.body, message: err.message });
  }
  client.close();
  console.log("disconnected!");
}

// get the thread to pull all posts from
const getThread = async (req, res) => {
  const client = new MongoClient(MONGO_URI);
  
  try {
    await client.connect();

    const db = client.db("beatclash");
    console.log("connected!");

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

      return res.status(201).json({ status: 201, data: newThread, message: "Thread successfully added to the database!"});

    } catch (err) {
      console.log(err.stack);
      res.status(500).json({ status: 500, message: err.message });
    }
    client.close();
    console.log("disconnected!");
  }
}

const createReply = async (req, res) => {

  // Takes userId, username, and body
  // then grabs boardId from params
  // creates one item to push all data
  // into a thread object on the database

  const { userId, username, body } = req.body;

  if( !userId || !username || !body) {
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

      const threadId = req.params._id;

      const Reply = {...req.body.data}

      Reply._id = uuidv4();
      Reply.likes = 0;
      Reply.dislikes = 0;
      Reply.date = "06/12/2022",
      Reply.replies = [];

      console.log(Reply);


      // find the posts array in the thread
      // const longLine = await db.collection("threads").findOne({ "_id": threadId });
      await db.collection("threads").updateOne({ "_id": threadId }, { $push: { "posts": {
         "_id": Reply._id,
         "userid": userId,
         "username": username,
         "body": body,
         "likes": Reply.likes,
         "dislikes": Reply.dislikes,
         "date": Reply.date,
         "replies": Reply.replies, 
        } } });;

      // .updateOne({ "_id": threadId }, { $push: { "posts": { Reply } } });

      return res.status(201).json({ status: 201, body: threadId, data: Reply, message: "Reply successfully added to the database!"});

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
  createReply,
  // addUser,
  // updateThread,
  // updateReply,
  // deleteThread,
  // deleteReply
}