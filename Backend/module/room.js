const mongoose =require( "mongoose");
const { Schema } = mongoose;
const roomSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  ratings: {
    type: Number,
    required: true,
  },
  facility: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  policies:{
    type: String,
    require: true,
  },


  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports=mongoose.model('room',roomSchema)