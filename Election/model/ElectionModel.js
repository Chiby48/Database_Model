const mongoose = require("mongoose")

const ElectionController = mongoose.Schema({
    id:{
        type:String
    },
    PVC:{
        type:String
    },
    pollingUnit:{
        type:String
    },
    politicalParty:{
        type:Boolean
    },
    citizen:{
        type:Boolean
    },
   
})

const ElectionModel = mongoose.model("Election", ElectionSchema)
module.exports = ElectionModel