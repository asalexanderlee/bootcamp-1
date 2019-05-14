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
* Install Postman
* Install Terminal or iTerm
* Install Atom, VSCode, or other IDE

---

# Day 1

### Javascript Review
*Review:* [Pre-bootcamp exercise](https://jsbin.com/lekihiyiqe/1/edit?js,console)
*Exercise:* (TODO)

### Terminal
Search the web in order to perform the following exercises in your terminal:
1. Change to the Documents directory with 'cd folder_name'
2. List out all of the files in that folder with 'ls'
3. Create a new folder and cd to your new folder
4. Create a new file, then immediately delete it
5. Delete the file you just created
6. Return to your home directory (~)
7. cd to your newly created folder using only 1 command

### Git & GitHub

*Exercise:*
Visit *[https://learngitbranching.js.org/](https://learngitbranching.js.org/)* and complete exercises 1, 2, and 3

*Exercise:*
1. Clone this GitHub repository
2. Checkout a new branch called *your_name*
3. Use your IDE to change title of readme to *{your name}’s Bootcamp Overview*
4. Stage and commit your changes
5. Push your branch up to the remote

*Brainstorm*
**Q:** Can you think of ways to organize your git repositories and branches in order to facilitate collaboration over the summer? (For instance: do you each have a branch under your name? or do you create a new branch for every new feature?)

### Package/Dependency Management

1. What is npm and how does it work?
2. What are some examples of other package management tools?
3. What's the purpose of package.json? package-lock.json?
4. Why do you have a folder called node_modules? 

*I would recommend trying to initialize npm in your cloned repository for practice*

### More Javascript

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
2. What is Promise.all?
3. What is a callback?
4. What is an arrow function? What's different about arrow functions?
5. What is going on here?
   Can you rewrite with function() instead of => ?

```javascript
let addFiveDigits = a => b => c => d => e => a + b + c + d + e;
addFiveDigits(1)(1)(1)(1)(1);
```

6. What are object prototypes?
7. What are higher order components (HOCs)?

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
