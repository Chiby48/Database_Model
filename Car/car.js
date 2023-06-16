const express = require("express")

const port = 1290

const app = express()

app.use(express.json())

app.get("/", (req, res)=>{
    res.status(200).json({
        message: "Car API is ready for consumption"
    })
})

app.listen(port, () =>{
    console.log("")
    console.log("Server is listening port", port)
})