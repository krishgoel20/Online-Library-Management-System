const express = require("express");
const mongoose = require("mongoose");
const bookRoute = require("./controller/bookRoute");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

mongoose.set("strictQuery",true); // Deprection Warning // To supress warning
mongoose.connect("mongodb+srv://krishg_20:12345@cluster0.dba0nhv.mongodb.net/Library-DB");
var db = mongoose.connection;
db.on("open",()=>console.log("Connected to DB"));
db.on("error",()=>console.log("Error occurred"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());
app.use("/bookRoute",bookRoute);

app.listen(4000,()=>{
    console.log("Server started at port 4000");
})