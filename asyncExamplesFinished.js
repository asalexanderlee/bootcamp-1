const fetch = require("node-fetch");
// Exercise 1
// Write a function that fetches the html from https://www.nytimes.com/
// and then writes the return value (which should just be HTML) to the console.
function getNYTimes() {
  console.time("NY Times");
  fetch("https://www.nytimes.com/")
    .then(res => res.text())
    .then(ans => console.timeEnd("NY Times"));
  // .then(ans => console.log(ans));
}

// Exercise 2
// Write a function that fetches the HTML from five major news sources all at
// once, then concatenates the HTML from the sites into one long string. (Hint: Promise.all)
function getNewsSources() {
  console.time("5 News sources ALL");
  const nytimes = fetch("https://www.nytimes.com/").then(res => res.text());
  const washpost = fetch("https://www.washingtonpost.com/").then(res => res.text());
  const nypost = fetch("https://www.nypost.com/").then(res => res.text());
  const charlotteobs = fetch("https://www.charlotteobserver.com/").then(res => res.text());
  const medium = fetch("https://medium.com/").then(res => res.text());

  Promise.all([nytimes, washpost, nypost, charlotteobs, medium]).then(values => console.timeEnd("5 News sources ALL"));
  // .then(values => console.log(values.join(" || ")));
}

// Exercise 3
// Write a function that fetches the HTML from five major news sources all at
// once and returns the HTML of the webpage that loads first. (Hint: Promise.race)
function getNewsSourcesRace() {
  console.time("5 News sources RACE");
  const nytimes = fetch("https://www.nytimes.com/").then(res => res.text());
  const washpost = fetch("https://www.washingtonpost.com/").then(res => res.text());
  const nypost = fetch("https://www.nypost.com/").then(res => res.text());
  const charlotteobs = fetch("https://www.charlotteobserver.com/").then(res => res.text());
  const medium = fetch("https://medium.com/").then(res => res.text());

  Promise.race([nytimes, washpost, nypost, charlotteobs, medium]).then(value => console.timeEnd("5 News sources RACE"));
  // .then(value => console.log(value));
}

// Exercise 4
// Write a function that fetches the HTML from five major news sources one after the other.
function getNewsSourcesSequential() {
  console.time("5 News sources SEQUENTIAL");
  fetch("https://www.nytimes.com/").then(() =>
    fetch("https://www.washingtonpost.com/").then(() =>
      fetch("https://www.nypost.com/").then(() =>
        fetch("https://www.charlotteobserver.com/")
          .then(() => fetch("https://medium.com/"))
          .then(() => console.timeEnd("5 News sources SEQUENTIAL"))
      )
    )
  );
}
getNYTimes();
getNewsSources();
getNewsSourcesRace();
getNewsSourcesSequential();

// Exercise 5
// For the previous three functions, use console.time() to benchmark the speed
// of all three promises. What do you notice?

// Exercise 6
// Write a function that takes as arguments an arbitrary period of time (in milliseconds)
// and an arbitrary function that it executes after the specified period of time. (This is a callback.)
function executeFunc(time, func) {
  setTimeout(func, time);
}
executeFunc(3000, () => console.log("Hello World"));

// Exercise 7
// Write a Promise that resolves after 4000 milliseconds.
function promise4000() {
  const p = new Promise((res, rej) => setTimeout(res, 4000));
  p.then(() => console.log("Resolved"));
}
promise4000();

// BONUS
// Rewrite Exercise 4 using async/await
async function getNewsSourcesSequentialAwait() {
  console.time("5 News sources SEQUENTIAL with async/await");
  const nytimes = await fetch("https://www.nytimes.com/");
  const washingtonpost = await fetch("https://www.washingtonpost.com/");
  const nypost = await fetch("https://www.nypost.com/");
  const charlotteobs = await fetch("https://www.charlotteobserver.com/");
  const medium = await fetch("https://medium.com/");
  console.timeEnd("5 News sources SEQUENTIAL with async/await");
}
getNewsSourcesSequentialAwait();
