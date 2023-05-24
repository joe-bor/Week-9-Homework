const express = require("express");
const app = express();
const port = 3000;

/* R O U T E S */

app.get("/", (req, res) => {
  res.send("This is the root");
});

app.get("/greeting/:name?", (req, res) => {
  if (!req.params.name) res.send("Hello Stranger");
  res.send(`Hello there ${req.params.name}, nice to see you!`);
});

app.get("/tip/:total?/:tipPercentage?", (req, res) => {
  let tip =
    parseInt(req.params.total) * (parseInt(req.params.tipPercentage) / 100);

  //check if both params are given
  if (!req.params.total || !req.params.tipPercentage) {
    res.send("/tip/:total/:tipPercentage both params are required");
  } else if (
    //and that they are both finite numbers
    Number.isFinite(req.params.total) ||
    Number.isFinite(req.params.tipPercentage)
  ) {
    res.send("Both params must be a finite number!");
    console.log("both params must be finite");
  } else {
    res.send(`tip = ${tip}`);
  }
});

app.get("/magic/:question", (req, res) => {
  const magicResponses = [
    "It is certain",
    "It is decidedly so",
    "Without a doubt",
    "Yes definitely",
    "You may rely on it",
    "As I see it yes",
    "Most likely",
    "Outlook good",
    "Yes",
    "Signs point to yes",
    "Reply hazy try again",
    "Ask again later",
    "Better not tell you now",
    "Cannot predict now",
    "Concentrate and ask again",
    "Don't count on it",
    "My reply is no",
    "My sources say no",
    "Outlook not so good",
    "Very doubtful",
  ];
  let randomIndex = Math.floor(Math.random() * magicResponses.length);
  res.send(`<h1>${magicResponses[randomIndex]}</h1>`);
});

//TODO: MAKE IT DYNAMIC!
app.get("/fibonacci/:num", (req, res) => {
  // const fibonacci = [
  //   0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597,
  //   2584, 4181,
  // ];

  // take req.params.num and throw it in checkFib

  function checkFib(num) {
    // first = 0
    // second = 1
    // fib = first + second
    // 0 + 1 = 1
    // 1 + 1 = 2
    // 1 + 2 = 3
    // first = second, second = fib, fib = sum (first + second) ?
    // repeat until fib is less than num
    // function stops num is greater than fib
    // res.send corresponding message depending on result

    let first = 0;
    let second = 1;
    let fib = 0;
    let fibArr = [];

    while (fib < num) {
      fib = first + second;
      fibArr.push(fib);
      first = second;
      second = fib;
    }

    if (fibArr.includes(num)) return true;
    else return false;
  }

  let num = parseInt(req.params.num);

  if (checkFib(num)) {
    res.send(`Very good. ${num} is a fibonacci number`);
  } else res.send("I can tell this is not a fibonacci number");
});

/* END */

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
