const fs = require('fs');

const users = {
    id:1,
    name:'shadi',
    email:"ss@gmail.com"
}

// const usersJSON = JSON.stringify(users);//! gives a string back  example2
// fs.writeFileSync('users.json',usersJSON )


// console.log(usersJSON);================================== example 1

// const parsedData = JSON.parse(usersJSON);//!gives back an object

// console.log(parsedData.name);

// ==================================== example 3 ==================
const dataBuffer = fs.readFileSync('users.json');//!returns strange binary data type
console.log(dataBuffer);

const dataJSON = dataBuffer.toString();//! convert back the binary data to a string
console.log(dataJSON);

const user = JSON.parse(dataJSON);//! comvert data from sting to an object
console.log(user);


user.id = 17  //! modifing data of the object

const userJSON = JSON.stringify(user)//! convert back the object to a string
fs.writeFileSync('users.json',userJSON);//! rewriting the json file with the new data