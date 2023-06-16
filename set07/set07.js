const express = require("express")

const port = 1454

const app = express()

app.use(express.json())

app.listen(port, ()=>{
    console.log("Server is okay on port", port)
})