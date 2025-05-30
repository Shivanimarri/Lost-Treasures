const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const itemSchema=new Schema({

    item:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    imgUrl:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    semester:{
        type:Number,
        required:true
    },
    department:{
        type:String,
        required:true
    },
    contact:{
        type:Number,
        required:true
    },
    found:{
        type:Boolean,
        required:true
    }
});

const Item = mongoose.model("item-module", itemSchema);
module.exports = Item;