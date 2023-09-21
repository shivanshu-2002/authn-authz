const express = require("express");
const app = express();
const dbConnect  = require('./config/database')
const router = require('./routes/routes');

app.get('/',(req,res)=>{
      res.send(`<h1>Hello world</h1>`)
})

app.use(express.json());

// Setting up the router..
app.use("/api/v1",router);

app.listen(3000,()=>{
      console.log("Hello App is running on 3000");
})
dbConnect();