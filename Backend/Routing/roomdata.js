const express = require('express');
const roomSchema = require('../module/room');
const router = express.Router();

router.post('/AddNewRoom', async (req, res) => {
  const {name,location,ratings,facility,price,description,type,img,policies}=req.body;
  
  room = await roomSchema.create({
    name ,
    location ,
    ratings ,
    facility ,
    price ,
    description ,
    type ,
    img ,
    policies ,
})
const saveRoom = await room.save(); //note save
        res.json(saveRoom);
  })
  module.exports = router;