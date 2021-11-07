const data = [
  {
    name: "John",
    birthday: "1-1-1995",
    favoriteFoods: [
      {
        meats: ["hamburgers", "sausages"],
        fish: ["salmon", "pike"],
      },
    ],
  },
  {
    name: "Mark",
    birthday: "10-5-1980",
    favoriteFoods: [
      {
        meats: ["hamburgers", "steak", "lamb"],
        fish: ["tuna", "salmon", "barracuda"],
      },
    ],
  },
  {
    name: "Mary",
    birthday: "1-10-1977",
    favoriteFoods: [
      {
        meats: ["ham", "chicken"],
        fish: ["pike"],
      },
    ],
  },
  {
    name: "Thomas",
    birthday: "1-10-1990",
    favoriteFoods: [
      {
        meats: ["bird", "rooster"],
        fish: ["salmon"],
      },
    ],
  },
  {
    name: "Mary",
    birthday: "1-10-1977",
    favoriteFoods: [
      {
        meats: ["hamburgers", "lamb"],
        fish: ["anchovies", "tuna"],
      },
    ],
  },
];
const names = (arr) => {
  return arr.map((el) => {
    return el.name;
  });
};
const born = (arr) => {
  return arr.filter((item) => {
    const birthday = new Date(item.birthday).getFullYear();
    if (birthday < 1990) {
      return item;
    }
  });
};
const food = (arr) => {
  const obj = {};
  arr.forEach((el) => {
    el.favoriteFoods.forEach((foodObj) => {
      console.log(foodObj);
    //   foodObj.forEach((meatItem) => {
    //     console.log();
    //     // obj[meatItem] = obj[meatItem] + 1 || 1;
    //   });
      foodObj.fish.forEach((fishItem) => {
        obj[fishItem] = obj[fishItem] + 1 || 1;
      });
    });
  });
  return obj;
};
console.log(food(data));

debugger;

//!========================= error message from reminal
//     TypeError: foodObj.forEach is not a function
//     at D:\learning\fullstack\Node.js\full-stack\ex6-1-debugging\ex6-1-debugging.js:72:13
//     at Array.forEach (<anonymous>)
//     at D:\learning\fullstack\Node.js\full-stack\ex6-1-debugging\ex6-1-debugging.js:70:22
//     at Array.forEach (<anonymous>)
//     at food (D:\learning\fullstack\Node.js\full-stack\ex6-1-debugging\ex6-1-debugging.js:69:9)
//     at Object.<anonymous> (D:\learning\fullstack\Node.js\full-stack\ex6-1-debugging\ex6-1-debugging.js:83:17)
//     at Module._compile (node:internal/modules/cjs/loader:1095:14)
//     at Object.Module._extensions..js (node:internal/modules/cjs/loader:1147:10)
//     at Module.load (node:internal/modules/cjs/loader:975:32)
//     at Function.Module._load (node:internal/modules/cjs/loader:822:12)

// Node.js v17.0.1
// PS D:\learning\fullstack\Node.js\full-stack></anonymous>
