const express = require("express")
const cors = require("cors")
const textDisplayRoute = require("./routes/textDisplayRoute")

const PORT = 7000 || process.env.PORT
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(textDisplayRoute)

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})