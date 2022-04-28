const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/about', (req, res) => {
  res.send('Hello from the other side!')
})

app.get('/contact', (req, res) => {
  res.send('Send me a message')
})
app.post('/about', (req, res) => {
  res.send('Hello but I will probably not answer!')
})

app.put('/marshmellows', (req, res) => {
  res.send('I actually love them')
})

app.delete('/marshmellows', (req, res) => {
  res.send('No I don\'t')
})

app.head('/marshmellows', (req, res) => {
  res.send('I like marshmellows on my sweetpotatoes')
})

app.put('/bananas', (req, res) => {
  res.send('Great for knee pain ')
})

app.patch('/bananas', (req, res) => {
  res.send('I do not know what patch does?? Anyone?')
})

app.link('/pandulce', (req, res) => {
  res.send('Pan dulce Doña Mary and some coffee, I will always want that')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

