const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const http = require("http").Server(app);
const io = require("socket.io")(http);
const mongoose = require("mongoose");

app.use(express.static(__dirname));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

mongoose.Promise = Promise;

const dbUri =
  "mongodb+srv://cham0chiran:leaner_192551@chat-app.7untq.mongodb.net/?retryWrites=true&w=majority&appName=chat-app";

const Message = mongoose.model("Message", {
  name: String,
  message: String,
});

app.get("/messages", (req, res) => {
  Message.find({})
    .then((messages) => {
      res.send(messages);
    })
    .catch((err) => {
      console.error("Error retrieving messages. ", err);
      res.sendStatus(500);
    });
});

app.get("/messages/:user", (req, res) => {
  const user = req.params.user;

  Message.find({ name: user })
    .then((messages) => {
      res.send(messages);
    })
    .catch((err) => {
      console.error("Error retrieving messages. ", err);
      res.sendStatus(500);
    });
});

app.post("/new", async (req, res) => {
  try {
    const message = new Message(req.body);

    const savedMessage = await message.save();

    console.log("saved");

    const censored = await Message.findOne({ message: "badword" });

    if (censored) {
      await Message.deleteOne({ _id: censored._id });
    } else {
      io.emit("message", req.body);
    }
    res.sendStatus(200);
  } catch (error) {
    console.error("error saving messages: ", error);
    res.sendStatus(500);
  } finally {
    console.log("post called");
  }

  // message
  //   .save()
  //   .then(() => {
  //     if (req.body.message === "badword") {
  //       console.log("censored words found.");
  //       Message.deleteOne({ _id: message._id })
  //         .then(() => {
  //           console.log("Removed badword.");
  //           res.status(200);
  //         })
  //         .catch((err) => {
  //           console.error("Error deleting badword: ", err);
  //           res.sendStatus(500);
  //         });
  //     } else {
  //       io.emit("message: ", req.body);
  //       res.sendStatus(200);
  //     }
  //   })
  //   .catch((err) => {
  //     console.error("Error saving message: ", err);
  //     res.sendStatus(500);
  //   });
});

io.on("connection", (socket) => {
  console.log("a user connected");
});

mongoose.connect(dbUri);

const server = http.listen(3000, () => {
  console.log("Server is listening on port", server.address().port);
});
