---
path: /blog/regex-domination-to-become-an-algorithms-wizard-basic
title: Regex Domination To Become An Algorithms Wizard [Basic]
date: 2019-07-30
thumbnail: "../../images/thumbnails/regex-basic.jpg"
tags: ['javascript', 'codenewbie', 'beginners', 'webdev', 'regex']
author: Mauro Bono
---

In this article I want to take a close look at one of the most weird argument I found while learning to code: Regular Expressions.
Any time I work with Regular Expressions I feel like Jon Snow in front of Ygritte listening to her saying **_"YOU KNOW NOTHING, JON SNOW"_**.
Probably it's because any time I get in touch with Regular Expressions it seems I know nothing about them ☹. It seems that there's always something new to learn that I miss or don't know.
I like to think that any **Super Coder** out there the first time he/she got in touch with Regex felt the same as me.

After a lot of practice with algorithms on [FreeCodeCamp](https://www.freecodecamp.org/) or [Codewars](https://www.codewars.com/) I can tell you that Regular Expressions are difficult to understand in the beginning, but very useful and friendly when it comes to solve different kind of problems in Javascript.
So: let's start diving in the Regular Expressions World!

**_What the hell are Regular Expressions ?_**
According to **Mozilla Developers Network** Regular Expressions are:
> patterns used to match character combinations in strings.

It means Regex, for short, allows us to check a series of characters for matches in strings.
They are commonly used for validating data, performing advanced searches, replacing or updating text, and more.
When you need to validate something like phone numbers, email addresses or passwords in your code you need to use a Regex.
So...learn it! 😄

#### CREATING A REGULAR EXPRESSION
In Javascript there are a couple of ways to create a regular expression:
  a. **Regex Literal**:
  This is the most used syntax and the one I'm going to use in this article.
  Syntax: `let regex = /wizard/;`

  b. **Regex Constructor**:
  This syntax is very handy when you need to create regex dynamically.
  Syntax: `let regex = new RegExp('wizard');`

Now that we know how to create a Regex let's use our knowledge to create a simple one:
First Regex: **_/wizard/_**;
This is the string where we want to check for our Regex: _"become an algorithms wizard is very hard!"_.
Result: _"become an algorithms **wizard** is very hard!"_.
The regex we created **literaly matches the word 'wizard'**. Nothing more, nothing less.

#### REGULAR EXPRESSION JS METHODS
In Javascript there are different methods to work with Regex. I'll talk about just a couple.
  a. **_test()_** that tests whether there's a match or not of the regex against a given string. It returns a Boolean value.
  Example:
  ```javascript
  let string = 'May the Force be with you';
  let regex = /Force/;
  let result = regex.test(string);
  console.log(result); // true
  ```

  b. **_match()_** that returns an array containing all matched groups of characters. It is always tested against a string. If there is no match found it returns **_null_**.
  Example:
  ```javascript
  let string = 'May the Force be with you';
  let regex = /Force/;
  let result = string.match(regex);
  console.log(result);
  /**
   * output:
   * [ 'Force',
        index: 8,
        input: 'May the Force be with you',
        groups: undefined
      ]
  */
 ```

#### SIMPLE PATTERN
Up till now we used only this kind of regex. It matches a literal pattern.
Let's make just another example:
```javascript
let string = 'I find your lack of faith disturbing.';
let regex = /faith/;
let result = string.match(regex);
console.log(result);
/**
 * [ 'faith',
    index: 20,
    input: 'I find your lack of faith disturbing.',
    groups: undefined
  ]
 */
```

#### FUN WITH FLAGS
Regex are **case sensitive** and **look only for a first match**.
Mr Stephen Cole Kleene, inventor of Regex, was a good man and gave us the possibilities to check both for case insensitive and for more than a single match.
He let us use the so called **flags**. They are also simple to use: just add them after the closing forward slash. Remember you can combine different flags and the order doesn't affect the search.
Syntax: `/pattern/flags`
  A. **_g_** - Global flag that don't return after the first match
  Examples:
  ```javascript

  //No Global Flag Example
  let string = 'force force force';
  let regex = /force/; // no global flag
  let result = string.match(regex); //it will return only the first match at index 0
  console.log(result);
  /**
   * [ 'force',
      index: 0,
      input: 'force force force',
      groups: undefined
    ]
  */

  //Example with Global Flag
  let string = 'force force force';
  let regex = /force/g; // global flag on
  let result = string.match(regex); // it will all matches
  console.log(result); //['force', 'force', 'force'];

  ```

  B. **_i_** - Case Insensitive flag
  Examples:
  ```javascript
  //No Case Insensitive Flag
  let string = 'force force Force'; //last word is uppercased
  let regex = /force/g; // no case-insensitive flag
  let result = string.match(regex); //it will return only the first two matches
  console.log(result); //['force', 'force'];

  //Case Sensitive Flag
  let string = 'force force Force'; //last word is uppercased
  let regex = /force/gi; // case-insensitive flag
  let result = string.match(regex); //it will return all matches
  console.log(result); //['force', 'force', 'Force'];

  ```

#### CHARACTER SETS
It matches any single character in the string from characters present inside the square brackets **/[abc]/**.
For instance the above **/[abc]/** means "hey, look for **a**, **b** or **c** inside the string"
Syntax: `/[abc]/` It matches a, b or c inside a string.
Examples:
```javascript
let string = 'foo poo zoo';
let regex = /[fpz]oo/gi; // matches any f, p or z followed by 'oo'
let result = string.match(regex);
console.log(result); //[ 'foo', 'poo', 'zoo' ]

//Using another Character Set it is possible to match any Vowels like 'o' 😉
//Take a look:
let string = 'foo poo zoo';
let regex = /[fpz][aeiou][aeiou]/gi; // matches any f, p or z followed by a couple of vowels
let result = string.match(regex);
console.log(result); //[ 'foo', 'poo', 'zoo' ]

//Another one:
let string = 'foo faa fee';
let regex = /f[aeiou][aeiou]/gi; // matches any f followed by a couple of vowels
let result = string.match(regex);
console.log(result); //[ 'foo', 'faa', 'fee' ]
```

#### NEGATED CHARACTER SETS
It matches anything that is not enclosed in the brackets if a caret followes the opening bracket `/[^abc]/`.
For instance the above `/[^abc]/` means _"hey, look for a character but **a**, **b** or **c** inside the string"_.
Examples:
```javascript
let string = 'fun sun gun';
let regex = /[^fs][aeiou]n/gi; // matches anything but f and s followed by a vowel and a 'n'
let result = string.match(regex);
console.log(result); //[ 'gun' ]

//Look at this one
let string = 'fun sun gun';
let regex = /[fsg][^aeiou]n/gi; // matches f,s or g followed by a letter except a vowel and then by a n
let result = string.match(regex);
console.log(result); //null
```

#### RANGES
Square brackets can also contain a range of characters to look for inside a string like this **/[a-c]/**.
For instance the above **/[a-c]/** means _"hey, look for a range of characters from **a** to **c** inside the string"_. It will search for a, b and c.
It is very easy to look for any letter of the alphabet using this regex: **/[a-z]/**
Syntax: `/[a-c]/` It matches a, b or c inside a string.
Examples:
```javascript
let string = 'fear tear bear';
let regex = /[a-z]ear/gi; // matches any letter of the alphabet followed by 'ear'
let result = string.match(regex);
console.log(result); // ["fear", "tear", "bear"]

//Another example with a range of numbers
let string = 't85 x76 c9';
let regex = /[a-z][0-9][0-9]/gi; // matches any letter of the alphabet followed by 2 numbers from 0 to 9
let result = string.match(regex);
console.log(result); //["t85", "x76"]
```

#### NEGATED RANGES
Like for Character Sets it is possible to negate even a range of characters so, for example, `/[^a-z]/` means _"hey, get any characters but a lowercased letter from the alphabet, we really don't need it!"_.
Examples:
```javascript
let string = '88c foo @4c';
let regex = /[^a-z][^a-z][a-z]/gi; // matches a couple of non alphabet letter followed by a letter
let result = string.match(regex);
console.log(result); //["88c", "@4c"]
```

#### META CHARACTERS
Regular Expressions have characters with a very special meaning. I'm going to cover the most used.
a. **\d** matches any digit like [0-9]
b. **\w** matches any word character, it means any letter, numbers and underscore like [a-zA-Z0-9_]
c. **\s** matches a whitespace character. Spaces, tabs and similar.
d. **\t** matches a tab character.
e. **.** the period matches any character except newline.
f. **\D** matches any non digit characters like [^0-9].
g. **\W** matches any non word characters like [^a-zA-Z0-9_].
h. **\S** matches a non whitespace character.

#### QUANTIFIERS
They are symbols that have a special meaning in a regex.

  a. **+** matches the preceding expression 1 or more times (unlimited)
  Example:
  ```javascript
  let string = '8 88 888';
  let regex = /\d+/g; // matches a pattern of one or more digits
  let result = string.match(regex);
  console.log(result); //["8", "88", "888"]

  //Look here:
  let string = 'force 88 888';
  let regex = /\d+/g; // matches a pattern of one or more digits
  let result = string.match(regex);
  console.log(result); //[88", "888"]

  //Look at this piece of cake
  let string = 'gd god good goooooooooood';
  let regex = /go+d/g; // matches a pattern of one or more letter o
  let result = string.match(regex);
  console.log(result); //["god", "good", "goooooooooood"]
  ```

  b. **/*/** matches the preceding expression 0 or more times (unlimited)
  ```javascript
  let string = 'gd god good goooooooooood';
  let regex = /go*d/g; // matches a pattern of zero or more letter o
  let result = string.match(regex);
  console.log(result); //["gd", "god", "good", "goooooooooood"]
  ```

  c. **?** matches the preceding expression 0 or 1 time, so the preceding pattern is optional
  ```javascript
  let string = 'god good goooooooooood';
  let regex = /goo?d/g; // matches god or good and the second o is optional!
  let result = string.match(regex);
  console.log(result); //["god", "good"]
  ```

  d. **^** matches the beginning of the string and the follow regex must be at the start of the test string.
  ```javascript
  let string = 'force';
  let regex = /^f/; // the string must start with a f
  let result = regex.test(string);
  console.log(result); //true

  //Another example
  let string = '888';
  let regex = /^[0-9]/; // the string must start with a number
  let result = regex.test(string);
  console.log(result); //true

  //Another one
  let string = 'pass0999';
  let regex = /^[0-9]\w+/; // the string must start with a number and followed by any word chars
  let result = regex.test(string);
  console.log(result); //false
  ```

  e. **$** matches the end of the string and the regex that precedes must be at the end of the test string.
  ```javascript
  let string = 'pass0999';
  let regex = /\d$/; // the string must end with a digit
  let result = regex.test(string);
  console.log(result); //true
  ```

  f. **{x}** matches exactly x occurences of the preceding regex.
  ```javascript
  let string = 'god good goood';
  let regex = /go{2}d/gi; // check for g followed by 2 letter o and then g
  let result = string.match(regex);
  console.log(result); //["good"]
  ```

  g. **{x, }** matches at least x occurences of the preceding regex.
  ```javascript
  let string = 'god good goood';
  let regex = /go{2,}d/gi; // check for g followed by at least 2 letters o and then g
  let result = string.match(regex);
  console.log(result); //["good", "goood"]
  ```

  h. **{x, y}** matches at least x occurences and at most y occurences of the preceding regex.
  ```javascript
  let string = 'god good goood gooood';
  let regex = /go{2,3}d/gi; // check for g followed by at least 2 and at most 3 letters o and then d
  let result = string.match(regex);
  console.log(result); //["good", "goood"]
  ```

  i. **x|y** matches either x or y.
  ```javascript
  let string = 'good';
  let regex = /good|bad/; // check either for 'good' or 'bad'
  let result = regex.test(string);
  console.log(result); //true

  //And
  let string = 'bad';
  let regex = /good|bad/; // check either for 'good' or 'bad'
  let result = regex.test(string);
  console.log(result); //true
  ```

**Attention** — In case you want to use any special character as a part of the regex, say for example you want to match literal . or ?, you have to escape them with backslash \ .

#### And finally a fast recap of what we saw in this first article on Regex Basic
```javascript
let regex;
//SINGLE REGEX PATTERN
regex = /abc/; //match a specific string

//FLAGS
regex = /abc/i; //match a specific string case insensitive
regex = /abc/g; //match a specific string globally
regex = /abc/gi; //match a specific string globally and case insensitive

//CHARACTER SETS AND NEGATIVE CHARACTER SETS
regex = /[abc]/; //match a specific characters set
regex = /[^abc]/; //not match a specific characters set

//RANGE OF CHARACTERS AND NEGATIVE RANGE OF CHARACTERS
regex = /[a-z]/; //match a range of characters
regex = /[^a-z]/; //not match a range of characters

//METACHARACTERS
regex = /\d/; // matches any digit
regex = /\D/; // matches any non-digit
regex = /\w/; // matches any word character, underscore included (a-z, A-Z, 0-9, _)
regex = /\W/; // matches any non-word character
regex = /\s/; // matches any white space character (\r (carriage return),\n (new line), \t (tab), \f (form feed))
regex = /\S/; // matches any non-white space character
regex = /\t/; // matches any tab

//QUANTIFIERS
regex = /[0-9]+/; //match a range of characters for one or unlimited times
regex = /[0-9]{2}/; //match a range of characters exactly 2 times
regex = /[0-9]{2,3}/; //match a range of characters from 2 to 3 times
regex = /[0-9]{2,}/; //match a range of characters from 2 to unlimited times
```

That’s it for the Basic of Regular Expressions. A new article on more advanced features will follow.
Meanwhile don't forget to practice these basic skills.
If you want you can do it online at a very good website like [Regex101](https://regex101.com).

I will update this article with new information and some algorithms on regex, based on the reactions and comments.
If you found this article helpful, please hit the 💖 or 🦄 button and share the article, so it could help others.
Follow me on [Twitter](https://twitter.com/UpTheIrons1978).

**_Code Long And Prosper_**
