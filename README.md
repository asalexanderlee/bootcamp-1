# Bootcamp Overview

## Goal

By the end of the bootcamp, students should have the skills and competencies to build a simple todo web application on a javascript and MongoDB stack.

## Learning Schedule

### Week 1

* Advanced Javascript
* MongoDB, Mongo Shell, Mongoose
* RESTful architecture, APIs
* Introduction to express
* Express Routing

### Week 2

* Sessions, Cookies, Headers, HTTP Parsing
* React: flux, JSX, state, props
* React: component lifecycle
* React: advanced concepts
* Redux

## Typical Daily Schedule

* _9am-12pm_ Breakout lectures, general conversations about code, begin peer programming.
* _12pm-1pm_ Lunch
* _1pm-5pm_ Peer programming on coding challenge.

## Setup:

* Create GitHub Account
* Download Brew
* Download NodeJS > 8.0
* Download and start MongoDB Community Edition
* Download MongoDB Compass
* Install Terminal or iTerm
* Install Atom, Sublime, or other IDE
* Install Firefox

---

## Day 1 Warmup

### Breakouts

* GitHub, Git, .gitignore
* npm, yarn, and package management
* require, import, exports

### Javascript 101

0. What is asynchronocity? Why is it important? https://stackoverflow.com/questions/748175/asynchronous-vs-synchronous-execution-what-does-it-really-mean

Notice what happens with this code:

```javascript
function getGoogle() {
  console.log("A");
  fetch("google.com").then(function(res) {
    console.log("B: I got the website!");
  });
  console.log("C");
}
```

1. What is a [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)?
1. What is Promise.all?
1. What is a callback?
1. What is an arrow function? What's different about arrow functions?
1. What is going on here?
   Can you rewrite with function() instead of => ?

```javascript
let addFiveDigits = a => b => c => d => e => a + b + c + d + e;
addFiveDigits(1)(1)(1)(1)(1);
```

1. Whats the difference between `const`, `var`, `let`?
1. What are object prototypes?
1. What are higher order components (HOAs)?

### Release 1 (on your own)

0. Write a function that fetches the html from https://www.nytimes.com/ and then writes the return value (which should just be HTML) to the console.
1. Write a function that fetches the HTML from five major news sources all at once, then concatenates the HTML from the sites into one long string. (Hint: Promise.all)
1. Write a function that fetches the HTML from five major news sources all at once and returns the HTML of the webpage that loads first. (Hint: Promise.race)
1. Write a function that fetches the HTML from five major news sources one after the other. Hint:

```javascript
fetch().then(() => {
  fetch().then(() => {
    fetch().then();
  });
});
```

1. For the previous three functions, use [console.time()](https://developer.mozilla.org/en-US/docs/Web/API/Console/time) to benchmark the speed of all three promises. What do you notice?
1. Write a function that takes as arguments an arbitrary period of time (in milliseconds) and an arbitrary function that it executes after the specified period of time. (This is a callback.)
1. Write a Promise that resolves after 4000 milliseconds.
