const mongoose = require("mongoose");
mongoose.set('strictQuery', false);

const conectMongo = () => {
  mongoose.connect(process.env.DB_URL).then( () => {
    console.log("Connected!");
  }).catch("db not conect")
};

module.exports =conectMongo;