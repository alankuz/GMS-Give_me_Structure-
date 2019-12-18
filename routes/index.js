const express = require('express');
const Data = require('../models/data');
const router = express.Router();

router.post("/api/getData", (req, res) => {
    Data.find({id: req.body.id},(err, data) => {
      if (err) return res.json({ success: false, error: err });
      return res.json({ success: true, data: data });
    });
  });
  
  router.post("/api/updateData", (req, res) => {
    console.log('hit update')
    console.log(req.body);
    const { itemId, name, startDateTime, endDateTime, classes } = req.body;
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

  });
  
  router.post("/api/deleteData", (req, res) => {
    const { itemId, name, startDateTime, endDateTime, classes, userId } = req.body;
    console.log("TCL: userId", userId)
    console.log("TCL: classes", classes)
    console.log("TCL: endDateTime", endDateTime)
    console.log("TCL: startDateTime", startDateTime)
    console.log("TCL: name", name)
    console.log("TCL: itemId", itemId)
  
   
   
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
  
  router.post("/api/putData", (req, res) => {
    let data = new Data();
    console.log('yoyoyoyo')
  
    const { id, message } = req.body;
    console.log('req.body', req.body)
    console.log(id)
    console.log(message)
    console.log('\n')
  
    Data.updateOne({ id: id }, { $push: { message: message }},{upsert:true}, (err)=> {
      if (err) return console.log(err)
    });
    
  });
  
module.exports = router;