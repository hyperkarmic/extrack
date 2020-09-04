const express = require("express");
const cors = require("cors");
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

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
//app sniffing on the port!!!!!
