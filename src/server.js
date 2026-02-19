const express = require("express")

const app = express()
app.use(express.json())

app.get("/", (req, res) => {
  res.send("Hello World") 

})
app.get("/api/data", (req, res) => {
  const data = {
    message: "This is some data from the server",   
    timestamp: new Date()
  }
  res.json(data) 
})
app.post("/api/data", (req, res) => {

    const receivedData = req.body   
    console.log("Received data:", receivedData)
    res.json({ message: "Data received successfully", data: receivedData }) 
})
const PORT = process.env.PORT || 3000   
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})