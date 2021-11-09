// npm i cors
//npm i nodemon
//npm i express
//npm i axios
//npm i body-parser
//npm i uniqid
const uniqid = require('uniqid');
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser');
const app = express()
const fs = require('fs')
app.use(cors())

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())



app.get('/', (req, res) => {
    if (!fs.existsSync('./shop.json')) {
        fs.writeFileSync('./shop.json', '[]')
    }

    const buffer = JSON.parse(fs.readFileSync('./shop.json').toString())

    // const shopItems = JSON.item(buffer.toString())
    res.status(200).json(buffer)
})


app.put('/:name', (req, res) => {
    let buffer = JSON.parse(fs.readFileSync('./shop.json').toString())
    const product = buffer.find(itm => itm.name === req.params.name);
    if (product) {
        product.price = parseFloat(req.body.price);
        fs.writeFileSync('./shop.json', JSON.stringify(buffer))
        res.status(200).send(product)
    }
    else {
        const item = {
            name: req.body.name,
            price: parseFloat(req.body.price),
            id: uniqid()
        }
        buffer = [...buffer, item]
        fs.writeFileSync('./shop.json', JSON.stringify(buffer))
        res.status(201).json(item)
    }

    // req.params.name
})



app.post('/', (req, res) => {
    let buffer = JSON.parse(fs.readFileSync('./shop.json').toString())
    // const shopItems = JSON.item(buffer.toString())
    console.log('koko', req.body);
    if (buffer.find(itm => { return req.body.name === itm.name })) {
        return res.status(404).send('item exists')
    }
    const item = {
        name: req.body.name,
        price: req.body.price,
        id: uniqid()
    }
    buffer = [...buffer, item]
    fs.writeFileSync('./shop.json', JSON.stringify(buffer))
    return res.status(201).json(item)
})

app.listen(6000, ()=>{
    console.log('liestning to port 6000');
})