const express = require("express");
const router = express.Router(); 
const Rooms = require("../module/room");


router.get("/getroom", async (req, res) => {
    try {
        const rooms = await Rooms.find();
      res.json(rooms);
    //   console.log(rooms)
    } catch (error) {
      res.status(500).send("Some internal server error !");
    }
  });

module.exports = router;