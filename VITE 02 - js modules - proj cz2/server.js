const express = require("express")
const app = express()
const PORT = 3000;
const path = require("path")

app.use(express.static("dist"))
app.listen(PORT, () => {
  console.log("start serwera na porcie " + PORT)
})
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"))
})