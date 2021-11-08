const modifyUsers = require('./usersModify')
const uniqid = require('uniqid'); 


// ============== read ======================
modifyUsers.showAll().then(data=> {
    console.log(data);
})
// =============== add ====================
modifyUsers.addUser('shadi',"sha@l;;om",uniqid()).then(data=>{
    console.log(data);
})

// =============== delete ====================
modifyUsers.deletUserById('eni31x5rwkvr9k6xs').then(data=>{
    console.log(data);
})
