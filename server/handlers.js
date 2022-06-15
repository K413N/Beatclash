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

    


    client.close();
    console.log("disconnected!");

    res.status(200).json({ status: 200, message: "success", data: userIds });
  } catch (err) {
    console.log(err.stack);
    res.status(500).json({ status: 500, data: req.body, message: err.message });
  }
  
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
    console.log(userObj);

    const filteredUser = {};

    filteredUser.username = userObj.username;
    filteredUser.avatar = userObj.avatar;
    filteredUser.description = userObj.description;
    filteredUser.joindate = userObj.joindate;
    filteredUser._id = userObj._id;

    client.close();
    console.log("disconnected!");

    return res.status(200).json({ status: 200, data: filteredUser });

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
    client.close();
  console.log("disconnected!");

    return res.status(200).json({ status: 200, message: "success", data: threads });
  } catch (err) {
    console.log(err.stack);
    return res.status(500).json({ status: 500, data: req.body, message: err.message });
  }
  
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

  const { op, threadTitle, body, mediaurl } = req.body;
  console.log(req.body);
  const boardId = req.params.boardId;

  if( !op || !threadTitle || !body) {
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

      // construct data before sending

      var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

      newThread._id = uuidv4();
      newThread.boardId = boardId;
      newThread.media = mediaurl;
      newThread.op = op;
      newThread.likes = 0;
      newThread.dislikes = 0;
      newThread.replies = 0;
      newThread.date = mm + "/" + dd + "/" + yyyy,
      newThread.tags = [];
      newThread.posts = [];

      console.log(newThread);

      // insert new thread with id into the database
      const result = await db.collection("threads").insertOne(newThread);


      // TO DO: update list of user's posts
      // const userPosts = await db.collection("users").findOneAndUpdate();
      client.close();
    console.log("disconnected!");

      return res.status(201).json({ status: 201, data: newThread, message: "Thread successfully added to the database!"});

    } catch (err) {
      console.log(err.stack);
      res.status(500).json({ status: 500, message: err.message });
    }
    
  }
}

const updateProfile = async (req, res) => {

  // takes data from the profile editor
  // applies it to the user object
  // on the mongodb database

  const { username, description, avatar, authUrl } = req.body;

  if(!description && !avatar && !username) {
    return res.status(400).json({
      status: 400,
      username: username,
      message: "Not all required data fields have been filled."
  })
} else {
  const client = new MongoClient(MONGO_URI);

  try {
    await client.connect();
    const db = client.db("beatclash");
    console.log("connected");

    // Prep user information data

    // Update the user information

    console.log(authUrl);

    await db.collection("users").updateOne(
      { "_id": authUrl },
      { $set: {"description": `${description}`}},
      )

      await db.collection("users").updateOne(
        { "_id": authUrl },
        { $set: {"avatar": `${avatar}`}},
      )

      await db.collection("users").updateOne(
        { "_id": authUrl },
        { $set: {"username": `${username}`}},
      )
      // { $set: {"username": `${username}`}},

      const UserProfile = await db.collection("users").findOne({ "_id": authUrl });
    

    client.close();
    console.log("disconnected!");

    res.status(200).json({ status: 200, message: "Profile updated!", data: UserProfile});

  } catch (err) {
    console.log(err.stack);
    res.status(500).json({ status: 500, message: err.message });
  }
}
}

const createReply = async (req, res) => {

  // Takes userId, username, and body
  // then grabs boardId from params
  // creates one item to push all data
  // into a thread object on the database

  const { username, body, mediaurl } = req.body;

  if(!body) {
    return res.status(400).json({
      status: 400,
      username: username,
      body: body,
      message: "Not all required data fields have been filled."
    });
  } else {
    const client = new MongoClient(MONGO_URI);

    try {
      await client.connect();
      const db = client.db("beatclash");
      console.log("connected!");

      const threadId = req.params._id;

      const Reply = {...req.body.data}

      // construct data before sending
      // this doesn't do anything cause
      // I use $push, but it still
      // sets certain variables like the UUID
      // so it can act as a failsafe

      var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

      Reply._id = uuidv4();
      Reply.mediaurl = mediaurl;
      Reply.username = username;
      Reply.likes = 0;
      Reply.dislikes = 0;
      Reply.replies = 0;
      Reply.date = mm + "/" + dd + "/" + yyyy,

      console.log(Reply);


      // find the posts array in the thread
      // const longLine = await db.collection("threads").findOne({ "_id": threadId });
      await db.collection("threads").updateOne({ "_id": threadId }, { $push: { "posts": {
         "_id": Reply._id,
         "mediaurl": Reply.mediaurl,
         "username": Reply.username,
         "body": body,
         "likes": Reply.likes,
         "dislikes": Reply.dislikes,
         "date": Reply.date,
         "replies": Reply.replies, 
        } } });;

      // .updateOne({ "_id": threadId }, { $push: { "posts": { Reply } } });
      client.close();
    console.log("disconnected!");

      return res.status(201).json({ status: 201, body: threadId, data: Reply, message: "Reply successfully added to the database!"});

    } catch (err) {
      console.log(err.stack);
      res.status(500).json({ status: 500, message: err.message });
    }
    
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
  updateProfile,
  // addUser,
  // updateThread,
  // updateReply,
  // deleteThread,
  // deleteReply
}