const mongoose = require("mongoose");
const getSecret = require("./secret");
const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");
const Data = require("./data");

const API_PORT = 3001;
const app = express();

mongoose.connect(getSecret("dbUri"));
let db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(logger("dev"));
const router = express.Router();


router.post("/getData", (req, res) => {
  Data.find({id: req.body.id},(err, data) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, data: data });
  });
});

router.post("/updateData", (req, res) => {
  console.log('hit update')
  console.log(req.body);
  const { itemId, name, startDateTime, endDateTime, classes } = req.body;
  // Data.findByIdAndUpdate(_id, update, err => {
  //   if (err) return res.json({ success: false, error: err });
  //   return res.json({ success: true });
  // });

  // { $push: { "sensors.0.measurements": { "time": req.body.time } } }

  Data.updateOne(
    { 
      id: req.body.userId, 
      "message._id": req.body.itemId 
    },
    { 
      $set: {
        "message.$": {
          _id:itemId,
          name,
          startDateTime,
          endDateTime,
          classes
        }
      }
    } ,
    (err, res) => {
    console.log('error: ', err);
    console.log('res: ', res);
  })






  // Data.findByIdAndUpdate({ _id: _id }, {name:name, startDateTime:startDateTime, endDateTime:endDateTime, classes:classes } , (err, docs)=> {

  //   if (err) return console.log(err);

  //   console.log("DOCS: ", docs);

  //   res.send('done');

  // });
});

router.post("/deleteData", (req, res) => {
  const { itemId, name, startDateTime, endDateTime, classes, userId } = req.body;
  console.log("TCL: userId", userId)
  console.log("TCL: classes", classes)
  console.log("TCL: endDateTime", endDateTime)
  console.log("TCL: startDateTime", startDateTime)
  console.log("TCL: name", name)
  console.log("TCL: itemId", itemId)

  // const arrayWithDataToDelete = Data.find(get the array where the delete needs to happen)

  // const newArray = arrayWithDataToDelete.filter(awdto => awdto.email !== itemId)
 
  Data.findOneAndUpdate(
    { 
      id: userId, 
      "message._id": itemId 
    },
    { '$pull': {
        "message": {
          '_id': itemId
        }
      }
    } ,
    (err, res) => {
    console.log('error: ', err);
    console.log('res: ', res);
  })
});

router.post("/putData", (req, res) => {
  let data = new Data();
  console.log('yoyoyoyo')

  const { id, message } = req.body;
  console.log('req.body', req.body)
  console.log(id)
  console.log(message)
  console.log('\n')
  // console.log(Data)

  Data.updateOne({ id: id }, { $push: { message: message }},{upsert:true}, (err)=> {
    if (err) return console.log(err)
  });
 
  // if ((!id && id !== 0) || !message) {
  //   return res.json({
  //     success: false,
  //     error: "INVALID INPUTS"
  //   });
  // }
  // data.message = message;
  // data.id = id;
  // data.save(err => {
  //   if (err) return res.json({ success: false, error: err });
  //   return res.json({ success: true });
  // });
  
});

app.use("/api", router);

app.listen(API_PORT, () => console.log(`LISTENING ON UHH PORT ${API_PORT}`));
