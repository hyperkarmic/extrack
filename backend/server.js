const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
//imports dependencies

require("dotenv").config();
//dotenv imported --- why .config?

const app = express();
//an instance of app
const port = process.env.PORT || 5000;
//port set up for Heroku or local use

app.use(cors());
app.use(express.json());
//middleware stack

//mongoose functionality starts here
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

//mongoose functionality ends here!!!!!

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
//app sniffing on the port!!!!!
