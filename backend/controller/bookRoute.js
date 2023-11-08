const express = require("express");
const bookSchema = require("../model/bookSchema");
const bookRoute = express.Router();
const mongoose = require("mongoose");

bookRoute.post("/create-book",(req,res)=>{
    bookSchema.create(req.body, (err,data) => {
        if (err)
            return err;
        else
            res.json(data);
    })
})

bookRoute.get("/",(req,res)=>{
    bookSchema.find((err,data) => {
        if (err)
            return err;
        else
            res.json(data);
    })
})

bookRoute.route("/update-book/:id").get((req,res)=>{
    bookSchema.findById(mongoose.Types.ObjectId(req.params.id), (err,data) => {
        if (err)
            return err;
        else
            res.json(data);
    })
}).put((req,res)=>{
    bookSchema.findByIdAndUpdate(mongoose.Types.ObjectId(req.params.id), {$set: req.body}, (err,data) => {
        if (err)
            return err;
        else
            res.json(data);
    })
})

bookRoute.delete("/delete-book/:id",(req,res)=>{
    bookSchema.findByIdAndRemove(mongoose.Types.ObjectId(req.params.id), (err,data) => {
        if (err)
            return err;
        else
            res.json(data);
    })
})

module.exports = bookRoute;