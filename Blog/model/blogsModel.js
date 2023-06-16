const mongoose = require("mongoose")

const BlogController = mongoose.Schema({
    structure:{
        type:String
    },
    introduction:{
        type:String
    },
    body:{
        type:String
    },
    content:{
        type:String
    },
    conclusion:{
        type:String
    },
})

const BlogModel = mongoose.model("Blog", BlogSchema)
module.exports = BlogModel