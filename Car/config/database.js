const mongoose = require("mongoose")

const car = "mongodb://0.0.0.0:27017/cardatabase"

const Database = async() =>{
    try {
        const dbconnect = await mongoose.connect(car)
        console.log("")
        console.log(`Database is connected to ${dbconnect.Connection.host}`)

    } catch (error) {
        console.log("An error occured in connecting database", error)
    }
}

module.exports = Database