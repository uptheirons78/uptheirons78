---
path: /blog/map-filter-reduce-and-others-arrays-iterators-you-must-know-to-become-an-algorithms-wizard
title: Javascript Array Iterators You Must Know To Become An Algorithms Wizard
date: 2019-07-09
thumbnail: "../../images/thumbnails/array-iterators.jpg"
tags: ["javascript", "codenewbie", "beginners", "webdev"]
author: Mauro Bono
---

In this article we are going to take a close look at some arrays iterators like **_map_**, **_filter_**, **_reduce_** or others methods that use callbacks to make arrays more flexible and help you solve problems and algorithms in javascript.
Learning these higher order functions is an important step towards being able to write clean functional code, and opens the doors to the vastly powerful techniques of functional and reactive programming.

1. Loop an array with **_forEach()_**;
   A great alternative of a **_for loop_** is surely the **_forEach_** method. It loops through the array and invokes a callback function using each value as an argument. The callback function takes 3 different parameters: the value in the array, the current index and the array that the callback is being called on. There is also a fourth value and it is the one to use as **_this_** when executing the callback (if it is not provided it will be **undefined**).
   Attention: **_forEach()_** does not mutate the array on which it is called

```javascript
const cities = ["ROME", "PARIS", "LONDON", "LOS ANGELES", "VIENNA"];

cities.forEach((value, index, array) => {
  console.log(`${index + 1} ${value}`); //output: 1 ROME, 2 PARIS, 3 LONDON, 4 LOS ANGELES, 5 VIENNA
});

//we can use it to invert the "cities" array...even though with reverse() would be better 😉
const invertedCities = [];
cities.forEach((value, index, array) => invertedCities.unshift(value));
console.log(invertedCities); //output: ["VIENNA", "LOS ANGELES", "LONDON", "PARIS", "ROME"]
```

2. Create a new array with the results of a function called on every element of the original array with **_map()_**;
   Very similar to the **_forEach()_** method. It iterates over an array and takes a callback function as a parameter that is invoked on each item in the original array. The difference is that it returns a **new array** that replaces each value with the return value of the callback function.

```javascript
//Let's create a new array with all our numbers squared
const numbers = [1, 2, 3, 4, 5];

const squaredNumbers = numbers.map(number => number * number);
console.log(squaredNumbers); //output: [1, 4, 9, 16, 25]

//We all know which is the most beautiful city in the World... 😉
const cities = ["ROME", "PARIS", "LONDON", "LOS ANGELES", "VIENNA"];
const bestCity = cities.map(city => (city === "ROME" ? city : "ROME"));
console.log(bestCity); //output: ["ROME", "ROME", "ROME", "ROME", "ROME"]

//Let's create an array of HTML tag
const html = cities.map(city => `<li>${city}</li>`);
console.log(html); //output: ["<li>ROME</li>", "<li>PARIS</li>", "<li>LONDON</li>", "<li>LOS ANGELES</li>", "<li>VIENNA</li>"]

//Transform an array of strings in an array of objects
const metalBands = ["IRON MAIDEN", "SLAYER", "JUDAS PRIEST"];
const collection = metalBands.map((band, index) => {
  let obj = {}; //create an empty object at any call of the loop
  obj.id = index; //create a key called "id" and set it equal to our index parameter
  obj.band = band; //create a key called "band" and set it equal to our band parameter
  return obj; //return an object at any call with key/value pairs like this: {id: 'index', band: 'band-name'}
});
console.log(collection); //output: [{id: 0, band: "IRON MAIDEN"},{id: 1, band: "SLAYER"}, {id: 2, band: "JUDAS PRIEST"}]
```

3. Filter values of an array with **_filter()_**;
   It returns a new array that only contains items from the original array that return true when passed to the callback.

```javascript
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//Return an array of even values from numbers
const evens = numbers.filter(num => num % 2 === 0);
console.log(evens); //output: [2, 4, 6, 8, 10]

//Return an array of odd values from numbers
const odds = numbers.filter(num => num % 2 !== 0);
console.log(odds); //output: [1, 3, 5, 7, 9]

//All the roads lead to Rome 🚋 ...
const cities = ["ROME", "PARIS", "LONDON", "LOS ANGELES", "VIENNA"];
const rome = cities.filter(city => city == "ROME");
console.log(rome); //output: ["ROME"]

//You can chain together this methods 🚀🚀🚀
//Example: let's square all even numbers
const squaredEvens = numbers.filter(num => num % 2 === 0).map(num => num * num);
console.log(squaredEvens); //output: [4, 16, 36, 64, 100];
```

4. Cumulatively combine each result to return a single value with **_reduce()_**;
   This is where the real magic happens! **_reduce()_** is the "cornerstone" of functional programming and if you'll get it you are on the right path to become a JS Wizard 🤘😉🤘
   It is another method that iterates over each item in the array, but this time it cumulatively combines each result to return just a single value.
   The callback function is used to describe how to combine each value of the array with the running total. This is often used for calculation of data stored in an array.
   The reducer function takes four arguments: accumulator, current value, current index and source array. It also accepts an initial value to use as the first argument to the first call of your callback.

```javascript
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//Let's start with a basic example
//Sum all the numbers in an array of integers
const sum = numbers.reduce((accumulator, currentValue, currentIndex, array) => {
  //Look we set the Initial Value to 0, because it is a sum so the count starts at 0
  //So our Accumulator is 0 at first call and we sum it with the Current Value that is 1 at first call...
  //the new Accumulator will be 0 + 1 = 1 ...at any call the Current Value will be added to it
  //till the end of the array
  return accumulator + currentValue;
}, 0);
console.log(sum); // output: 55

//Same example setting the Initial Value to 1 instead of 0 will return ... 56
const anotherSum = numbers.reduce(
  (accumulator, currentValue, currentIndex, array) => {
    return accumulator + currentValue;
  },
  1
);
console.log(anotherSum); // output: 56

//Sum from an array of objects
const integers = [{ x: 1 }, { x: 2 }, { x: 3 }];
const anotherSumAgain = integers.reduce((acc, val, idx, array) => {
  return acc + val.x;
}, 0);
console.log(anotherSumAgain); // output: 6

//Count vowels in a string (even though it's easier with regex 😉)
const maryPoppins = "supercalifragilisticexpialidocious";
const onlyVowels = maryPoppins.replace(/[^aeiou]/gi, ""); //'ueaiaiiieiaioiou'
const arrOfVowels = [...onlyVowels]; //["u", "e", "a", "i", "a", "i", "i", "i", "e", "i", "a", "i", "o", "i", "o", "u"]
const countVowels = arrOfVowels.reduce((acc, val) => {
  acc.hasOwnProperty(val) ? (acc[val] += 1) : (acc[val] = 0);
  return acc;
}, {});
console.log(countVowels); // output: {u: 1, e: 1, a: 2, i: 6, o: 1}

//Flatten an array of arrays
//Hey! I know ES2019 gave us flat and flatMap methods, but we MUST learn reduce() now 😉
const someData = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const flatten = someData.reduce((acc, val) => {
  //set the initial value to an empty array
  return acc.concat(val);
}, []);
console.log(flatten); // output: [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

//Sum all countries population except China
const population = [
  {
    country: "China",
    pop: 1409517397,
  },
  {
    country: "India",
    pop: 1339180127,
  },
  {
    country: "USA",
    pop: 324459463,
  },
  {
    country: "Indonesia",
    pop: 263991379,
  },
];
const sumPopulationButNotChina = population.reduce((acc, val) => {
  // we use the Ternary Operator as a "filter"
  //if val.country is not equal to "China" we add the value to the accumulator
  //if it is equal to "China" we add nothing and simply return the accumulator
  return val.country !== "China" ? acc + val.pop : acc;
}, 0);

console.log(sumPopulationButNotChina); // output: 1927630969
```

Similar to **_reduce()_** is **_reduceRight_**. It applies a function against an accumulator and each value of the array but from right-to-left. I'm not going to cover it here, because it only will be a repetition of what already said for **_reduce()_**.

5. Check if all array items pass a test with **_every()_**;
   The callback function to be used as the test takes 3 arguments: current value, index and the array. The return value is a Boolean. True if the callback function return truthy value for any element in the array. Otherwise false.

```javascript
//Check if all values are more than zero
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const moreThanZero = numbers.every((val, index, array) => val > 0);
console.log(moreThanZero); //true

const numbersAgain = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const moreThanZeroAgain = numbersAgain.every((val, index, array) => val > 0);
console.log(moreThanZeroAgain); //false

//Check if there are more than 1000000 people in all the countries
const population = [
  {
    country: "China",
    pop: 1409517397,
  },
  {
    country: "India",
    pop: 1339180127,
  },
  {
    country: "USA",
    pop: 324459463,
  },
  {
    country: "Indonesia",
    pop: 263991379,
  },
];

const check = population.every(val => val.pop > 1000000);
console.log(check); //true
```

6. Check if some array items pass a test with **_some()_**;
   The callback function to be used as the test takes 3 arguments: current value, index and the array. The return value is a Boolean. True if the callback function return a truthy value for at least one element in the array. Otherwise false.

```javascript
//Check if a value is more than zero in the array
const numbers = [-1, -2, 0, 10];
const moreThanZero = numbers.some((val, index, array) => val > 0);
console.log(moreThanZero); //true

const numbersAgain = [0, -1, -2];
const moreThanZeroAgain = numbersAgain.some((val, index, array) => val > 0);
console.log(moreThanZeroAgain); //false

//Check if there is at least a country with less than 1000000 people
const population = [
  {
    country: "China",
    pop: 1409517397,
  },
  {
    country: "India",
    pop: 1339180127,
  },
  {
    country: "USA",
    pop: 324459463,
  },
  {
    country: "Indonesia",
    pop: 263991379,
  },
];

const check = population.some(val => val.pop < 1000000);
console.log(check); //false
```

7. Find the first array item that passes a test with **_find()_**;
   The callback function to be used as the test takes 3 arguments: current value, index and the array. The return value is the item itself if an item at least passes the test. Otherwise it returns **_undefined_**.

```javascript
//Check if there is a value more than 7
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const moreThanSeven = numbers.find((val, index, array) => val > 7);
console.log(moreThanSeven); //8
//Check if there is a value more than 42
const moreThanFortyTwo = numbers.find((val, index, array) => val > 42);
console.log(moreThanFortyTwo); //undefined

//Check if there is a country with more than 100000000 people
const population = [
  {
    country: "China",
    pop: 1409517397,
  },
  {
    country: "India",
    pop: 1339180127,
  },
  {
    country: "USA",
    pop: 324459463,
  },
  {
    country: "Indonesia",
    pop: 263991379,
  },
];

const check = population.find(val => val.pop > 100000000);
console.log(check); //{ country: 'China', pop: 1409517397 }
```

This don't want to be an exhaustive list of all javascript array iterators, but a list of those I find out to be the most important when it comes to solve problems and algorithms.
To get better at JS and problem solving I suggest to "play" a lot with all these methods and to subscribe both on [FreeCodeCamp](https://www.freecodecamp.org/) or [Codewars](https://www.codewars.com/) where you can find a lot of algorithms to work with and brush up your javascript knowledge.
On [Codewars](https://www.codewars.com/) you can look for 7kyu or 6kyu algorithms about "arrays" and train with them. It will be funny and useful!

If you are interested in this kind of articles take a look at these:

- [Javascript String Methods You Must Know to Become an Algorithms Wizard](/blog/javascript-string-methods-you-must-know-to-become-an-algorithms-wizard)
- [Javascript Arrays Methods You Must Know to Become an Algorithms Wizard](/blog/javascript-array-methods-you-must-know-to-become-an-algorithms-wizard)

I will update this article with new information and some algorithms on arrays, based on the reactions and comments.
Follow me on [Twitter](https://twitter.com/UpTheIrons1978)

**_Code Long And Prosper_**

This post was originally published on [Dev.to](https://dev.to/uptheirons78/map-filter-reduce-and-others-arrays-iterators-you-must-know-to-become-an-algorithms-wizard-4209)
