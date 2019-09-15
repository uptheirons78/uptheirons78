---
path: /blog/javascript-array-methods-you-must-know-to-become-an-algorithms-wizard
title: Javascript Array Methods You Must Know To Become An Algorithms Wizard
date: 2019-07-09
thumbnail: "../../images/thumbnails/array-methods.jpg"
tags: ["javascript", "codenewbie", "beginners", "webdev"]
author: Mauro Bono
---

This time I want to talk about basic Arrays Methods which are commonly used in Javascript to solve problems and algorithms.

I've been working on solving algorithms both on FreeCodeCamp and CodeWars for the last 4 weeks and find out I used a lot of times this methods.

If you are interested in String Methods you can check my previous post about them:
[Javascript String Methods You Must Know to Become an Algorithms Wizard](https://dev.to/uptheirons78/javascript-string-methods-you-must-know-to-become-an-algorithms-wizard-c84)

First thing first before talking about array methods **always remember** array index starts at **0** !

1. Getting the length of any array with **_.length_** .

```javascript
const avengers = [
  "Captain America",
  "Iron Man",
  "Thor",
  "Hulk",
  "Hawkeye",
  "Black Widow",
];
console.log(avengers.length); //6
//This is a mutable property...you can change it "manually"
avengers.length = 8;
console.log(avengers); //["Captain America", "Iron Man", "Thor", "Hulk", "Hawkeye", "Black Widow", empty × 2]
//If you try to retrieve one of the two elements added...it will give you "undefined"
console.log(avengers[7]); //undefined
```

2. Remove last item of an array with **_pop()_**. It changes the length of the array and returns the removed element.

```javascript
const avengers = [
  "Captain America",
  "Iron Man",
  "Thor",
  "Hulk",
  "Hawkeye",
  "Black Widow",
];
console.log(avengers.pop()); //Black Widow
console.log(avengers); //[ 'Captain America', 'Iron Man', 'Thor', 'Hulk', 'Hawkeye' ]
console.log(avengers.length); //5

//Attention: If you call pop() on an empty array, it returns undefined !
const emptyArray = [];
console.log(emptyArray.pop()); //undefined
```

3. Remove first item of an array with **_shift()_**. It changes the length of the array and returns the removed item.

```javascript
const avengers = [
  "Captain America",
  "Iron Man",
  "Thor",
  "Hulk",
  "Hawkeye",
  "Black Widow",
];
console.log(avengers.shift()); //Captain America
console.log(avengers); //['Iron Man', 'Thor', 'Hulk', 'Hawkeye', 'Black Widow' ]
console.log(avengers.length); //5

//Attention: If you call shift() on an empty array, it returns undefined !
const emptyArray = [];
console.log(emptyArray.shift()); //undefined
```

4. Add one or more items at the end of an array with **_push()_**. It returns and changes the length of the array.

```javascript
const avengers = [
  "Captain America",
  "Iron Man",
  "Thor",
  "Hulk",
  "Hawkeye",
  "Black Widow",
];
console.log(avengers.push("DeadPool")); // 7
console.log(avengers); //['Captain America', 'Iron Man', 'Thor', 'Hulk', 'Hawkeye', 'Black Widow', 'DeadPool']

const animals = ["snake", "bear", "hawk"];
console.log(animals.push("monkey", "cat", "dog")); // 6
console.log(animals); //[ 'snake', 'bear', 'hawk', 'monkey', 'cat', 'dog' ]
```

5. Add one or more items to the beginning of an array with **_unshift()_**. It returns and changes the length of the array.

```javascript
const avengers = [
  "Captain America",
  "Iron Man",
  "Thor",
  "Hulk",
  "Hawkeye",
  "Black Widow",
];
console.log(avengers.unshift("DeadPool")); // 7
console.log(avengers); //['DeadPool', 'Captain America', 'Iron Man', 'Thor', 'Hulk', 'Hawkeye', 'Black Widow']

const animals = ["snake", "bear", "hawk"];
console.log(animals.unshift("monkey", "cat", "dog")); // 6
console.log(animals); //['monkey', 'cat', 'dog', 'snake', 'bear', 'hawk']
```

6. Merge an array with one or more arrays with **_concat()_**. It will not change the original array, but creats a new one. With ES6 **_spred operator_** it is possible to get the same result. It consists in three dots **...** placed in front of the array you want to spread and has the effect of spreading out all the values in each array, which allows them to be placed inside a new array.

```javascript
const firstArr = [0, 1, 2, 3, 4, 5];
const secondArr = [6, 7, 8, 9, 10];

console.log(firstArr.concat(secondArr)); //[ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
console.log(secondArr.concat(firstArr)); //[ 6, 7, 8, 9, 10, 0, 1, 2, 3, 4, 5 ]
console.log(secondArr.concat(firstArr, secondArr)); //[ 6, 7, 8, 9, 10, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

//ES6 SPREAD OPERATOR
console.log([...firstArr, ...secondArr]); //[ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
console.log([...secondArr, ...firstArr]); //[ 6, 7, 8, 9, 10, 0, 1, 2, 3, 4, 5 ]
console.log([...secondArr, ...firstArr, ...secondArr]); //[ 6, 7, 8, 9, 10, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
```

7. Turn an array into a string with **_join()_**. The string comprises all the items in the array separated by commas. Attention: You can choose a separator other than a comma by placing it inside the brackets.

```javascript
const avengers = [
  "Captain America",
  "Iron Man",
  "Thor",
  "Hulk",
  "Hawkeye",
  "Black Widow",
];
console.log(avengers.join()); //Captain America,Iron Man,Thor,Hulk,Hawkeye,Black Widow
console.log(avengers.join(" - ")); //Captain America - Iron Man - Thor - Hulk - Hawkeye - Black Widow
console.log(avengers.join(", ")); //Captain America, Iron Man, Thor, Hulk, Hawkeye, Black Widow
console.log(avengers.join(" & ")); //Captain America & Iron Man & Thor & Hulk & Hawkeye & Black Widow
```

8. Create a subarray with **_slice()_**. It chops out a slice of the original array starting from one position and ending to another. This is a non-destructive operation! The original array remains the same.

```javascript
const avengers = [
  "Captain America",
  "Iron Man",
  "Thor",
  "Hulk",
  "Hawkeye",
  "Black Widow",
];
console.log(avengers.slice(2, 4)); //[ 'Thor', 'Hulk' ]
console.log(avengers.slice(0, 1)); //[ 'Captain America' ]
console.log(avengers); //['Captain America', 'Iron Man', 'Thor', 'Hulk', 'Hawkeye', 'Black Widow']

//If begin parameter is not defined it slices from index 0
console.log(avengers.slice()); //['Captain America', 'Iron Man', 'Thor', 'Hulk', 'Hawkeye', 'Black Widow']
//if end parameter is not defined it slices from begin to array length
console.log(avengers.slice(2)); //[ 'Thor', 'Hulk', 'Hawkeye', 'Black Widow' ]

//Attention: A negative index can be used, indicating an offset from the end of the sequence. slice(-2) extracts the last two elements in the sequence.
console.log(avengers.slice(-2)); //[ 'Hawkeye', 'Black Widow' ]
console.log(avengers.slice(2, -2)); //[ 'Thor', 'Hulk' ]
```

9. Change the content of an array, removing, replacing or adding items with **_splice()_**. It takes a first parameter (usually called **start**) equal to index where to start changing the array, a second parameter (**itemsToDelete**) equal to the number of items to remove from **start**. Every value after this is then inserted into the array in the same place the other items were removed. The return value is an array containing the deleted elements. It is a destructive method and it changes the original array.

```javascript
const animals = ["monkey", "bull", "python", "cow"];
console.log(animals.splice(3, 1, "gorilla")); //[ 'cow' ]
console.log(animals); //[ 'monkey', 'bull', 'python', 'gorilla' ]
console.log(animals.splice(2, 2)); //[ 'python', 'gorilla' ];
console.log(animals); //[ 'monkey', 'bull' ]

//The splice() method can be used to insert values into an array at a specific index without removing any items, by indicating that zero items are to be removed:
const bestMetalBands = [
  "Iron Maiden",
  "Slayer",
  "Pantera",
  "Megadeth",
  "Judas Priest",
];
console.log(bestMetalBands.splice(2, 0, "Saxon")); //[]
console.log(bestMetalBands); //['Iron Maiden', 'Slayer', 'Saxon', 'Pantera', 'Megadeth', 'Judas Priest']
console.log(bestMetalBands.splice(2, 2)); //[ 'Saxon', 'Pantera' ]
console.log(bestMetalBands); //[ 'Iron Maiden', 'Slayer', 'Megadeth', 'Judas Priest' ]

//If you want to remove a value completely, you can use the splice() method with a length of 1 and without specifying any values to add
console.log(bestMetalBands.splice(2, 1)); //[ 'Slayer' ]
console.log(bestMetalBands); //[ 'Iron Maiden', 'Megadeth', 'Judas Priest' ]
```

10. Reverse the order of an array with **_reverse()_**. It changes the order of the array permanently.

```javascript
const bestMetalBands = [
  "Iron Maiden",
  "Slayer",
  "Pantera",
  "Megadeth",
  "Judas Priest",
];
console.log(bestMetalBands.reverse()); //[ 'Judas Priest', 'Megadeth', 'Pantera', 'Slayer', 'Iron Maiden' ]
console.log(bestMetalBands); //[ 'Judas Priest', 'Megadeth', 'Pantera', 'Slayer', 'Iron Maiden' ]
```

11. Sort the order of an array with **_sort()_**. It takes a so called **compareFunction** as parameter. If not defined the default sort order is built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values. This will create problems if a compareFunction is not defined for sorting an array of integers because they will be sorted alphabetically!

```javascript
const bestMetalBands = [
  "Iron Maiden",
  "Slayer",
  "Pantera",
  "Megadeth",
  "Judas Priest",
];
console.log(bestMetalBands.sort()); //[ 'Iron Maiden', 'Judas Priest', 'Megadeth', 'Pantera', 'Slayer' ]

const numbers = [4, 2, 5, 1, 3];
//ascending sorting
console.log(numbers.sort((a, b) => a - b)); //[ 1, 2, 3, 4, 5 ]
//descending sorting
console.log(numbers.sort((a, b) => b - a)); //[ 5, 4, 3, 2, 1 ]
```

12. Find the first occurrence of a value inside an array with **_indexOf()_**. If the value is in the array it returns the index of the first occurrence of that value. If not it returns -1. It has also a second optional parameter called **fromIndex**. The index where to start the search. If it is negative it is taken as the offset from the end of the array.

```javascript
const bestMetalBands = [
  "Iron Maiden",
  "Slayer",
  "Pantera",
  "Megadeth",
  "Judas Priest",
];
console.log(bestMetalBands.indexOf("Iron Maiden")); //0
console.log(bestMetalBands.indexOf("Megadeth")); //3
console.log(bestMetalBands.indexOf("Metallica")); //-1 ...they are no more a metal band ;)
console.log(bestMetalBands.indexOf("Iron Maiden", 2)); //-1
```

13. Find the last occurrence of a value inside an array with **_lastIndexOf()_**. If the value is in the array it returns the index of the last occurrence of that value. If not it returns -1. It has also a second optional parameter called **fromIndex**. The index where to start the search. If it is negative it is taken as the offset from the end of the array.

```javascript
const numbers = [4, 2, 5, 1, 3, 5, 3];
console.log(numbers.lastIndexOf(5)); //5
console.log(numbers.lastIndexOf(3)); //6
console.log(numbers.lastIndexOf(3, -3)); //4
console.log(numbers.lastIndexOf(42)); //-1 ...It is hard to find the Meaning of Life
```

14. Find if an array contains an item or not with **_includes()_**. It will return a boolean value: true or false. It is possible to use also here the **fromIndex** parameter like in indexOf() or lastIndexOf().

```javascript
const bestMetalBands = [
  "Iron Maiden",
  "Slayer",
  "Pantera",
  "Megadeth",
  "Judas Priest",
];
console.log(bestMetalBands.includes("Slayer")); //true
console.log(bestMetalBands.includes("Slayer", 3)); //false
console.log(bestMetalBands.includes("Metallica")); //false...Again? They are no more a metal band!
```

15. Take values out of an array and present them as an individual value with **_Destructuring_**. This is not an array method but a special syntax that let us unpack arrays (and objects) into variables. It is very handy when it comes to solve algorithms.

```javascript
const bestMetalBands = ["Iron Maiden", "Slayer", "Pantera"];
const [ironMaiden, slayer, pantera] = bestMetalBands;
console.log(ironMaiden); // Iron Maiden
console.log(slayer); //Slayer
console.log(pantera); //Pantera

//With Destructuring to swap the value of two variables it is now very easy
const arr = [42, 71];
let [x, y] = arr; //don't use const...
console.log(x); //42
console.log(y); //71
//...here comes the swap...
[x, y] = [y, x];
console.log(x); //71
console.log(y); //42
```

This don't want to be an exhaustive list of all javascript array methods, but a list of the ones I find out to be the most important when it comes to solve problems and algorithms.
To get better at JS and problem solving I suggest to "play" a lot with all these methods and to subscribe both on [FreeCodeCamp](https://www.freecodecamp.org/) or [Codewars](https://www.codewars.com/) where you can find a lot of algorithms to work with and brush up your javascript knowledge.
On [Codewars](https://www.codewars.com/) you can look for 7kyu or 6kyu algorithms about "arrays" and train with them. It will be funny and useful!

I will update this article with new information and some algorithms on arrays, based on the reactions and comments.

**_Code Long And Prosper_**

This post was originally published on [Dev.to](https://dev.to/uptheirons78/javascript-arrays-methods-you-must-know-to-become-an-algorithms-wizard-2ec7)
