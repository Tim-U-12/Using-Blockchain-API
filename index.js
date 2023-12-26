import express from "express"
import axios from "axios"
import bodyParser from "body-parser"

const app = express()
const port = 3000
const API_URL = "https://api.blockchain.com/v3/exchange"

app.use(bodyParser.urlencoded({extended:true}))

app.get("/", (req, res) => {
    res.render("index.ejs")
})

app.post("/", async (req, res) => {
    try {
        const response = await axios(API_URL + "/symbols/" + req.body.ticker)
        const result = response.data
        res.render("index.ejs", {data: JSON.stringify(result, null, 4)})
    } catch (error) {
        console.error("Failed to make request:", error.message)
    }
})

app.listen(port, (err)=> {
    if (err) throw err
    console.log(`Webpage is running on port ${port}`)
})