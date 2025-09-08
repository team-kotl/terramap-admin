// Author: @hiimjude Jude Angelo Ilumin        
const express = require("express");
const app = express();
const cors = require("cors");
const http = require("http");
const bodyParser = require("body-parser");
const db = require("./database").db;

const { Server } = require("socket.io");
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "http://localhost:5173",
        methods: ["GET", "POST"],
    },
});

// CORS policy
app.use(cors());

// Middleware
app.use(bodyParser.json());

// Route Imports
const authRouter = require("./routes/auth");

// Routes
app.use("/auth", authRouter);

io.on("connection", (socket) => {
    socket.on("join", (userId) => {
        socket.join(userId);
        console.log(`User ${userId} joined room`);
    });

    socket.on("sendMessage", ({ senderId, recipientId, message, isNew }) => {
        try {
            db.query(
                "INSERT INTO message (senderid, recipientid, message) VALUES (?, ?, ?)",
                [senderId, recipientId, message],
                (err, result) => {
                    if (err) {
                        console.log(err);
                    }

                    io.to(recipientId).emit("receiveMessage", {
                        senderid: senderId,
                        recipientid: recipientId,
                        message,
                        timesent: new Date(),
                        isNew: isNew,
                    });

                    io.to(senderId).emit("receiveMessage", {
                        senderid: senderId,
                        recipientid: recipientId,
                        message,
                        timesent: new Date(),
                        isNew: isNew,
                    });
                }
            );
        } catch (error) {
            console.error(error);
        }
    });

    socket.on("disconnect", () => {
        console.log("user disconnected:", socket.id);
    });
});

server.listen(2012, () => {
    console.log("Server started on http://localhost:2012");
});