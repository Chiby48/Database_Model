const mongoose = require("mongoose")

const TodoController = mongoose.Schema({
    items:{
        type:String
    },
    planning:{
        type:String
    },
    preparation:{
        type:String
    },
    task:{
        type:String
    },
    done:{
        type:String
    },
})

const TodoModel = mongoose.model("Todo", TodoSchema)
module.exports = TodoModel