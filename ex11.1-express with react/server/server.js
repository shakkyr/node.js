const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const fs = require('fs')
 
const app = express()
app.use(cors())

let id = 5;
// const persons = [
//     {id:0 , name:'shadi',email:'sha@.com', age:'34'},
//     {id:1 , name:'samer',email:'sam@.com', age:'31'},
//     {id:2 , name:'kareem',email:'kar@.com', age:'32'},
//     {id:3 , name:'asad',email:'asa@.com', age:'30'},
// ]

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', function (req, res){
    const buffer = fs.readFileSync('./users.json')
    const persons = JSON.parse(buffer.toString())
    res.status(200).json({'persons':persons})
    console.log(persons);
});

app.post('/', (req,res)=> {
    const buffer = fs.readFileSync('./users.json')
    const persons = JSON.parse(buffer.toString())
    if(persons.find(per=>{return req.body.email === per.email})){
        return res.status(404).send('user exists')
    }
    const person = {
        name:req.body.name,
        email:req.body.email,
        age:req.body.age,
        id:id++
    }
    persons.push(person)
    fs.writeFileSync('./users.json',JSON.stringify(persons) )
    return res.status(209).json({user:person})
} )


app.listen(5000,()=>{
    console.log('Listening on port 5000');
})