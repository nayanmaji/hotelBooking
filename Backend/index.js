const dotenv = require('dotenv')
const express = require('express')
const conectMongo = require('./database')
var cors = require('cors')
const app = express();
app.use(cors())
dotenv.config({path:'./config.env'});
conectMongo()
app.use(express.json())
app.use('/',require('./Routing/signup'));
app.use('/',require('./Routing/login'));
app.use('/',require('./Routing/roomdata'));
app.use('/',require('./Routing/getRoom'));
// app.use('/',require('./Routing/mailSend'));

app.listen(process.env.PORT,()=>{
    console.log("Express conected")
})
