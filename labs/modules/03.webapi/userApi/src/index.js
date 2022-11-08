const express = require('express')
const router = require('./routes/bird');
const bodyParser = require('body-parser')

const app = express()
const port = 8080

app.use(bodyParser.json()) // for parsing application/json

app.use('/', router);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

//git rm -r --cached