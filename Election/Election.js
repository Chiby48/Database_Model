const express = require("express")

const port = 2503

const app = express()

app.use(express.json()).app.get("/",(req, res)=>{
try {
    return res.status(200).json({
        message: "Election API is ready to consumption",
    })
} catch (error) {
    return res.status(404).json({
        message: error.message
    })
}
})

app.listen(port, ()=>{
    console.log("Server is running on port", port)
})