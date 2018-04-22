const app = require('express')()

const PORT = process.env.PORT || 4444

app.get('/', (req, res) => {
    console.log("request received")
    res.send("HELLO")
})

app.listen(PORT, () => {
    console.log("App started")
})