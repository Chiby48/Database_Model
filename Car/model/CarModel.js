const mongoose = require("mongoose")

const CarController = mongoose.Schema({
    name:{
        type:String
    },
    model:{
        type:String
    },
    year:{
        type:String
    },
    capacity:{
        type:String
    },
    engine:{
        type:String
    },
})

const CarModel = mongoose.model("Car", CarSchema)
module.exports = CarModel