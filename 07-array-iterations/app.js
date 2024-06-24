import { products } from "./products.js";

// JS-CC-07 : Array Iterations
// Purpose of the this coding challenge is to practice iterations on arrays that have object as a content

// Problem Statement
// Use the products.js file as a source of data. And provide solutions to following tasks:

/* 1 - List all the products in smartphones category */

const result = products.filter((item) => {
  if (item.category === "smartphones") {
    return item;
  }
});

console.log(result);

/* 2 - List all the products price less than 50 USD */

const result2 = products.filter((item) => {
  if (item.price < 50) {
    return item;
  }
});

console.log(result2);

/* 3 - Display all the categories uniquely */

const result3 = products.reduce((acc, item) => {
  if (!acc.includes(item.category)) {
    acc.push(item.category);
  }
  return acc;
}, []);

console.log(result3);

/* 4 - Display the info of the product that has max price */

const result4 = products.sort((a, b) => b.price - a.price);

console.log(result4); // Show all products in descending order
console.log(result4[0]); // Just show the product with highest price, that it is in the first position

/* 5 - Sum the prices of all products */

const result5 = products.reduce((acc, item) => {
  acc += item.price;
  return acc;
}, 0);

console.log(result5);

/* 6 - Sum prices of all products in laptops */

const result6 = products.reduce((acc, item) => {
  if (item.category === "laptops") {
    acc += item.price;
  }
  return acc;
}, 0);

console.log(result6);

/* 7 - Filter all laptops and only wrap titles with p tag and list them */

const result7 = products
  .filter((item) => {
    if (item.category === "laptops") {
      return item;
    }
  })
  .map((item) => {
    return `<p> ${item.title}</p>`;
  });

console.log(result7);

// Another way to do it, but with console.log we can't use this data later on. In case of doing it with map, we could use it --->

// const result7 = products.filter((item) => {
//   if (item.category === "laptops") {
//      console.log(`<p> ${item.title}</p>`) ;
//   }
// });

// console.log(result7);

/* 8 - Filter laptops and increase price by 10 usd  */

const result8 = products.filter((item) => {
  if (item.category === "laptops") {
    return (item.price += 10);
  }
});

console.log(result8);
