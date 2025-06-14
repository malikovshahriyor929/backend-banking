const express = require("express");
const mongoose = require("mongoose");
const fileUpload = require("express-fileupload");

require("dotenv").config();

const app = express();

// Route
const postRoute = require("./router/post.route");
const authRoute = require("./router/auth.route");

app.use(express.json());
app.use(express.static("static"));
app.use(fileUpload({}));

// Route
app.use("/api", postRoute);
app.use("/api/auth", authRoute);

const DB_Url = process.env.DB_URL;
const PORT = process.env.PORT || 3030;

const startConnection = async () => {
  try {
    await mongoose.connect(DB_Url).then(() => console.log("connected db"));
    app.listen(PORT, () => console.log(`listening on port ${PORT}`));
  } catch (error) {
    console.log(`Error was mongo Db - ${error}`);
  }
};
startConnection();
