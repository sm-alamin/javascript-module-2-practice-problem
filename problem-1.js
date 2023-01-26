// ******************************Practice Problem 1********************************
// You are given an array:

// var fruits = ['Apple', 'Banana', 'Orange'];

// a) Find the index of ‘Banana’ and replace ‘Banana’ with ‘Mango’.
// b) Remove ‘Orange’ and add ‘Watermelon’.

var fruits = ['Apple', 'Banana', 'Orange'];

// show index of banana
var bananaIndex = fruits.indexOf('Banana');
console.log(bananaIndex);

// replace banana by mango
fruits[1] = 'Mango';
console.log(fruits);

// remove orange
fruits.pop();
console.log(fruits);

//add watermelon
fruits.push('Watermelon');
console.log(fruits);
