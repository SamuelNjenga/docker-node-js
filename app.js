const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('hello world'))
const port = 3000
app.listen(3000, () => console.log(`My Rest API running on port ${port}`))
