
const fs = require('fs');

fs.writeFileSync('notes.txt', 'me name is shadi');//1

fs.copyFileSync('notes.txt', 'notesCopy.txt');//2

fs.renameSync('notes.txt', 'notesRenamed.txt');//3

console.log(fs.readdirSync(__dirname)); //4

fs.appendFileSync('notes.txt', ' and this is the appending  message'); //5

