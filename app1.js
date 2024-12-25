const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/home', (req, res) => {
    res.sendFile(__dirname + '/home.html')
  })

  app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/about.html')
  })

  app.get('/cake', (req, res) => {
    res.send('Yes We Have Cakes!')
  })
  app.get('/cake/rajkot', (req, res) => {
    res.send('We have Mava cakes!')
  })
  app.get('/cake/surat', (req, res) => {
    res.send('We have Surti cakes!')
  })
  app.get('/contact', (req, res) => {
    res.send('We are here to help you!')
  })
  app.get("*", (req, res) => {
    res.send('404 Page Not Found!')
  })
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})