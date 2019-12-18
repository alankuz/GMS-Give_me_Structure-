const mongoose = require("mongoose");
const getSecret = require("./secret");
const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");
const Data = require("./data");
const dbroutes = require("../client/routes/dbroutes")


const API_PORT =  process.env.PORT;
// const app = express();

mongoose.connect(getSecret("dbUri"));
let db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(logger("dev"));
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');

  //and remove cacheing so we get the most recent comments
  res.setHeader('Cache-Control', 'no-cache');
  next();
});
const router = express.Router();
//Static file declaration
router.get(express.static(path.join(__dirname, '../client/build')));
//production mode
if(process.env.NODE_ENV === 'production') {
  router.get(express.static(path.join(__dirname, '../client/build')));
  //
  
}
// //build mode
// app.get('/*', (req, res) => {
//   res.sendFile(path.join(__dirname+'/../client/public/index.html'));
// })


app.use("/api", dbroutes);
app.get('/*', (req, res) => {
  res.sendfile(path.join(__dirname = '../client/build/index.html'));
})

app.listen(API_PORT, () => console.log(`LISTENING ON UHH PORT ${API_PORT}`));
