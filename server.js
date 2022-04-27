const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/about', (req, res) => {
  res.send('Hello from about!')
})

app.post('/about', (req, res) => {
  res.send('Hello from post about!')
})

app.put('/marshmellows', (req, res) => {
  res.send('I actually love them')
})

app.delete('/marshmellows', (req, res) => {
  res.send('No I don\'t')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
