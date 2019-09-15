---
path: /blog/javascript-string-methods-you-must-know-to-become-an-algorithms-wizard
title: Javascript String Methods You Must Know To Become An Algorithms Wizard
date: 2019-07-06
thumbnail: "../../images/thumbnails/string-methods.jpg"
tags: ["javascript", "codenewbie", "beginners", "webdev"]
author: Mauro Bono
---

In this article I want to talk about few basic string methods which are most commonly used in Javascript and very useful when it comes to solve problems and algorithms.
I've been working on solving algorithms both on FreeCodeCamp and CodeWars for the last 4 weeks and find out I used a lot of times this methods.

If you are interested in Arrays Methods you can check my post about them:
[Javascript Arrays Methods You Must Know to Become an Algorithms Wizard](https://dev.to/uptheirons78/javascript-arrays-methods-you-must-know-to-become-an-algorithms-wizard-2ec7)

1. Getting length of a string with **_.length_**

```javascript
let str = "i am a string";
console.log(str.length); //13
```

2. Getting an array from a string with **_.split()_**. Remember it is possible to use a specified separator string to determine where to make each split.

```javascript
const str = "Luke, I am your Father";
console.log(str.split()); //[ 'Luke, I am your Father' ]
console.log(str.split("")); //["L", "u", "k", "e", ",", " ", "I", " ", "a", "m", " ", "y", "o", "u", "r", " ", "F", "a", "t", "h", "e", "r"]
console.log(str.split(" ")); //[ 'Luke,', 'I', 'am', 'your', 'Father' ]
console.log(str.split(",")); //[ 'Luke', ' I am your Father' ]
```

Let's see an easy algorithm I solved on CodeWars where given a string of words the function must return an array of integers equals to the words length.

```javascript
function wordsLength(str) {
  return str
    .split(" ") //first split the string at spaces to have an array of words;
    .map(word => word.length); //second use array map() to trasform any array element to its length with .length;
}

wordsLength("Luke, I am your father"); //[ 5, 1, 2, 4, 6 ]
```

3. Convert a string into upper case with **_toUpperCase()_**

```javascript
const str = "I find your lack of faith disturbing.";
console.log(str.toUpperCase()); //I FIND YOUR LACK OF FAITH DISTURBING.
```

4. Convert a string into lower case with **_toLowerCase()_**

```javascript
const str = "Help me, Obi-Wan Kenobi. You’re my only hope.";
console.log(str.toLowerCase()); //help me, obi-wan kenobi. you’re my only hope.
```

5. Check if a string contains specified characters **_includes()_**. It will return a boolean value (true or false). It is possible to add the position within the string at which to begin searching

```javascript
const str = "The Force will be with you. Always.";
console.log(str.includes("Force")); //true
//Attention: it is case sensitive!
console.log(str.includes("force")); //false
//Often it will be better to transform the given string to lowercased
//and then check if it includes or not what you are looking for.
const newStr = str.toLowerCase();
console.log(newStr.includes("force")); //true
//Add the position where to start searching
console.log(str.includes("w", 0)); //true
console.log(str.includes("T", 1)); //false
```

6. Check if a string starts with specified characters with **_startWith()_**. It will return a boolean value and it is possible to add the position where to start searching. It is case sensitive.

```javascript
const str = "Never tell me the odds!";
console.log(str.startsWith("Never")); //true
console.log(str.startsWith("Never", 1)); //false
console.log(str.startsWith("never", 0)); //false
```

7. Check if a string ends with specified characters with **_endsWith()_**. It will return a boolean value and it is possible to add the length parameter (optional). It is case sensitive.

```javascript
const str = "Do. Or do not. There is no try.";
console.log(str.endsWith("try.")); //true
console.log(str.endsWith("Try.")); //false
console.log(str.endsWith("try", 30)); //true
console.log(str.endsWith("try.", 30)); //false
```

8. Check for the first occurrence of a specified value in a string with **_.indexOf()_**. If the value is not in the string it will return -1. It is possible to add a second parameter starting the search at specified index.

```javascript
const str =
  "When gone am I, the last of the Jedi will you be. The Force runs strong in your family. Pass on what you have learned.";
console.log(str.indexOf("h")); //1
console.log(str.indexOf("H")); //-1
console.log(str.indexOf("h", 2)); //17
console.log(str.indexOf("J", str.length)); //-1
```

9. Check for the last occurrence of a specified value in a string with **_.lastIndexOf()_**. If the value is not in the string it will return -1. It is possible to add the index of the last character in the string to be considered as the beginning of a match.

```javascript
const str =
  "When gone am I, the last of the Jedi will you be. The Force runs strong in your family. Pass on what you have learned.";
console.log(str.lastIndexOf("h")); //105
console.log(str.lastIndexOf("h", 100)); //97
console.log(str.lastIndexOf(".")); //117
console.log(str.lastIndexOf(".", 0)); //-1
```

10. Repeat a given string with **_.repeat()_**.

```javascript
const str = "There’s always a bigger fish.";
console.log(str.repeat(2)); //There’s always a bigger fish.There’s always a bigger fish.
//Attention: count will be converted to integer!
console.log(str.repeat(5.5)); //There’s always a bigger fish.There’s always a bigger fish.There’s always a bigger fish.There’s always a bigger fish.There’s always a bigger fish.
```

11. Replace a pattern in a given string with **_replace()_**. The pattern can be a string or a regex and the replacement can be a string or a function to be called on each match. Attention: if the replacer or pattern is a string only the first occurence will be replaced.

```javascript
const string = "Fear is the path to the dark side.";
console.log(string.replace("Fear", "Tears")); //Tears is the path to the dark side.
console.log(string.replace(/a/gi, "A")); //FeAr is the pAth to the dArk side.
```

12. Get a specific character from a string using **_charAt()_**. A string representing the character (exactly one UTF-16 code unit) at the specified index is returned. An empty string if index is out of range!

```javascript
const string = "Fear leads to anger";
console.log(string.charAt(1)); //e
console.log(string.charAt(string.length - 1)); //r
console.log(string.charAt(string.length)); //'' Index out of range!
//Attention: if no index is provided the default one is 0;
console.log(string.charAt()); //F
```

13. Get the UTF-16 code of the letter at the given index in a string with **_charCodeAt()_**. This method is very useful with algorithms like ROT13 or Caesar Cypher. If no index is provided the default one is 0.

```javascript
const string = "We must keep our faith in the Republic.";
console.log(string.charCodeAt(0)); //87
console.log(string.charCodeAt(5)); //115
//If you want all the UTF-16 values of any letter in a string
//split the string to have an array of letters
//map the array and change any letter to its utf-16 value with charCodeAt();
const utfValuesArr = string.split("").map(letter => letter.charCodeAt());
console.log(utfValuesArr);
//[87, 101, 32, 109, 117, 115, 116, 32, 107, 101, 101, 112, 32, 111, 117, 114, 32, 102, 97, 105, 116, 104, 32, 105, 110, 32, 116, 104, 101, 32, 82, 101, 112, 117, 98, 108, 105, 99, 46]
```

14. Get a string created from the specified sequence of UTF-16 code units with the static **_String.fromCharCode()_** method.

```javascript
console.log(String.fromCharCode(65)); //A
console.log(String.fromCharCode(105, 106, 107)); //ijk
console.log(String.fromCharCode(32)); //'' empty space!
const arr = [
  77,
  97,
  121,
  32,
  116,
  104,
  101,
  32,
  70,
  111,
  114,
  99,
  101,
  32,
  66,
  101,
  32,
  87,
  105,
  116,
  104,
  32,
  89,
  111,
  117,
];
const quote = arr.map(n => String.fromCharCode(n));
console.log(quote.join("")); //May the Force Be With You
```

15. Get a section of a string, returned in a new string, without modifying the original one with **_slice()_**.
    It takes two parameter. BeginIndex, or where to start to slice the string and the optional EndIndex where to stop to slice it.
    If no EndIndex is provided it will slice the string to the end. Attention: A negative index counts backwards from the end of the string

```javascript
const string = "I’m just a simple man trying to make my way in the universe.";
console.log(string.slice(1)); //’m just a simple man trying to make my way in the universe.
console.log(string.slice(0, 10)); //I’m just a
console.log(string.slice(-3)); //se.
```

16. Get the part of the string between the start and end indexes, or to the end of the string with **_substring()_**. Attention: any argument value that is less than 0 or greater than stringName.length is treated as if it were 0 and stringName.length respectively. Any argument value that is NaN is treated as if it were 0.

```javascript
const string = "Darth Vader";
console.log(string.substring(0)); //Darth Vader
console.log(string.substring(6)); //Vader
console.log(string.substring(1, 6)); //arth
```

17. Remove whitespaces from both ends of a string with **_trim()_**.

```javascript
const string = "      Yoda     ";
console.log(string.trim()); //Yoda
```

This don't want to be an exhaustive list of all javascript string methods, but a list of the ones I find out to be the most important when it comes to solve problems and algorithms.
To get better at JS and problem solving I suggest to "play" a lot with all these methods and to subscribe both on [FreeCodeCamp](https://www.freecodecamp.org/) or [Codewars](https://www.codewars.com/) where you can find a lot of algorithms to work with and brush up your javascript knowledge.
On [Codewars](https://www.codewars.com/) you can look for 7kyu or 6kyu algorithms about "strings" and train with them. It will be funny!

**_Code Long And Prosper_**

This post was originally published on [Dev.to](https://dev.to/uptheirons78/javascript-string-methods-you-must-know-to-become-an-algorithms-wizard-c84/edit)
