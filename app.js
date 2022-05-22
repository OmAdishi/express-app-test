const express = require('express')
const app = express()
const port = 3000
const path = require('path')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use('/', express.static(path.join(__dirname, 'public')))

app.get('/gapi', (req, res) => {
    let obj = {
        success: true,
        req: req.query
    }
    res.send(obj)
})

app.post('/papi', (req, res) => {
    let obj = {
        success: true,
        req: req.body
    }
    res.send(obj)
})
  
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})