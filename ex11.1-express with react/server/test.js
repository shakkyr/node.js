const express = require('express')
const axios = require('axios')
const bodyParser = require('body-parser')

const app = express()
 


app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())


app.get('/', function (req, res) {
  res.status(404).json({ 'shadi':30})
})
app.post('/', function (req, res) {
    if(req.body.age >18){
       return res.status(200).json(req.body)
    }
    return res.status(404).json('error')
 
})
 
app.listen(3000)