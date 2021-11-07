//!============================ 1 What is the difference between import and require?======================
// REQUIRE is Non-lexical, it stays where they have put the file.
// IMPORT  is lexical, it gets sorted to the top of the file.


// REQUIRE It can be called at any time and place in the program.
// IMPORT  It can’t be called conditionally, it always run in the beginning of the file.


// REQUIRE You can directly run the code with require statement.
// IMPORT  To run a program containing import statement you have to use experimental module feature flag.


// REQUIRE If you want to use require module then you have to save file with ‘.js’ extension.
// IMPORT  If you want to use import module then you have to save file with ‘.mjs’ extension.



//!============================== 2 How can you enable using the import syntax using node js ==============================
//! Node.js >= v13

//You need to either:

// Save the file with .mjs extension, or
// Add { "type": "module" } in the nearest package.json.
// You only need to do one of the above to be able to use ECMAScript modules.

//! Node.js <= v12

// If you are using Node.js version 8-12, save the file with ES6 modules with .mjs extension and run it like:

// node --experimental-modules my-app.mjs


//! ========================= 3 Give 2 node.js environment variables that are not available when using the import syntax.

// import chalk 
//import moment

//!========================= 4 Create 3 functions using the export/import syntax. =================

import { first,second, third } from "./functions.mjs";

const string = first();
console.log(string);
console.log(second(2,4));
console.log(third(2,4));

//!========================= 5 Import the file system module using the import syntax. ========================
import * as fs from'fs';

fs.writeFileSync('notes.txt', 'me name is shadi');