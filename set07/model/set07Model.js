const mongoose = require("mongoose")

const set07Controller = mongoose.Schema({
    name:{
        type:String
    },
    emails:{
        type:String
    },
set07:{
        type:String
    },
    isFemale:{
        type:Boolean
    },
    PhoneNum:{
        type:Number
    },
})

const set07Model = mongoose.model("student", set07Schema)
module.exports = set07Model