"use strict";

// import the needed node_modules.
const express = require("express");
const morgan = require("morgan");
const http = require("http").createServer(express);
const io = require("socket.io")(http);

io.on("connection", socket => {
    socket.on("message", ({ name, message }) => {
        io.emit("message", { name, message })
    })
})

const {
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
} = require("./handlers");

express()
    // Below are methods that are included in express(). We chain them for convenience.
    // --------------------------------------------------------------------------------

    // This will give us will log more info to the console. see https://www.npmjs.com/package/morgan
    .use(morgan("tiny"))
    .use(express.json())

    // Any requests for static files will go into the public folder
    .use(express.static("public"))

    // get all the users on the website
    .get("/api/get-users", getUsers)

    // get all friends of a user
    .get("/api/get-friends/:_id", getFriends)

    // get all information on a single user
    .get("/api/get-user/:_id", getUser)

    // get all the threads of a specific board
    .get("/api/get-threads/:boardId", getThreads)

    // get all information on a specific thread
    .get("/api/get-thread/:boardId/:_id", getThread)

    // create a new thread
    .post("/api/create-thread/:boardId", createThread)

    // create a reply to an existing thread
    .post("/api/create-reply/:boardId/:_id", createReply)

    // add a new user to the database
    // .post("/api/add-user", addUser)

    // update a thread, used when you edit
    // a thread that already exists.
    // .patch("/api/update-reply/:boardId/:_id", updateThread)

    // update reply, used to edit your reply.
    // .patch("/api/update-thread/:boardId/:_id/:_id", updateReply)

    // delete a thread by id
    // .delete("/api/delete-thread/:boardId/:_id", deleteThread)

    // delete a reply
    // .delete("/api/delete-reply/:boardId/:_id/:_id", deleteReply)

    // catch all endpoint.
    .get("*", (req, res) => {
        res.status(404).json({
        status: 404,
        message: "This is obviously not what you are looking for.",
        });
    })

    // Node creates server and sets it to listen on port 8000.
    .listen(8000, () => console.log(`Listening on port 8000`));
