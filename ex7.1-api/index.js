const axios = require('axios');//!============ 1
const https = require('https');//!============ 2 
const got = require('got');//! =============== 3
// const superagent = require('superagent');//!== 4
// const fetch = require('node-fetch');//!======= 5
const chalk = require('chalk');

//! ======================= 1 axios ===================
const getJokes = async () => {
  try {
    return await axios.get('https://api.chucknorris.io/jokes/random')
  } catch (error) {
    console.error(error)
  }
}

const countjokes = async () => {
  const jokes = await getJokes()

console.log(chalk.red('fetch using axios :=>'));
console.log(chalk.green(jokes.data.value));
}

countjokes()

//! ========================= 2 Node.js https =================
https.get('https://api.chucknorris.io/jokes/random', res => {
  let data = [];
  
  res.on('data', chunk => {
    data.push(chunk);
  });

  res.on('end', () => {
    console.log('Response ended: ');
    const users = JSON.parse(Buffer.concat(data).toString());
    console.log(chalk.red('fetch using nodeJS https :=>'));
console.log(chalk.yellow(users.value));
  });
})


//! =======================3 using Got =============================

got.get('https://api.chucknorris.io/jokes/random', {responseType: 'json'})
  .then(res => {
    console.log(chalk.red('fetch using Got :=>'));
 console.log(chalk.cyan(res.body.value));
  
  })
 

//!   ================== 4 superagent =======================
// (async () => {
//     try {
//       const res = await superagent.get('https://api.chucknorris.io/jokes/random');
      
//       const users = res.body;
//       for(user of users) {
//         console.log(`Got user with id: ${user.id}, name: ${user.name}`);
//       }
//     } catch (err) {
//       console.log(err.message); //can be console.error
//     }
//   })();

// //!   ==================== 5 node-fetch =======================
// (async () => {
//     try {
//       const res = await fetch('https://api.chucknorris.io/jokes/random');
//       const headerDate = res.headers && res.headers.get('date') ? res.headers.get('date') : 'no response date';
//       console.log('Status Code:', res.status);
//       console.log('Date in Response header:', headerDate);
  
//       const users = await res.json();
//       for(user of users) {
//         console.log(`Got user with id: ${user.id}, name: ${user.name}`);
//       }
//     } catch (err) {
//       console.log(err.message); //can be console.error
//     }
//   })();