const app = require('express')()

app.get('/', (req, res) => res.send("HELLO"))

app.listen(4444)