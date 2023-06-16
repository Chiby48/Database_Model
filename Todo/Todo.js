const express = require("express")

const port = 6700

const app = express()

app.use(express.json())

app.listen(port, ()=>{
    console.log("Server is okay..")
})