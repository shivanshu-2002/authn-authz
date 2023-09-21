const express = require("express");
const dbConnect = require("./config/database")
const app = express();
const todoRoutes = require('./routes/routes')

// const bodyParser = require("body-parser");
// app.use(bodyParser.json());
app.use(express.json());

app.get('/',(req,res)=>{
      res.send("Hello world Welcome back")
 })

 app.use('/api/v1',todoRoutes);

app.listen(3000,()=>{
    console.log("Server is running on 3000");
})


// Database is connected;
dbConnect();