import express from "express"
import axios from "axios"

const app = express()
const port = 3000

app.listen(port, (err)=> {
    if (err) throw err
    console.log(`Webpage is running on port ${port}`)
})