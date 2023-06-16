express = require("expess")

const port = 1234

const app = express()

app.use(express.json()).app.get("/", (req, res) =>{
    res.status(200).json({
        message: "Blog API is ready for consumption"
    })
})

app.listen(port, () =>{
    console.log("Server is Okay...")
})