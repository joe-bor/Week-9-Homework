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

//Fibonnaci
app.get("/fibonacci/:num", (req, res) => {
  const fibonacci = [
    0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597,
    2584, 4181,
  ];

  let num = parseInt(req.params.num);
  if (fibonacci.includes(num)) {
    res.send("Very good, It is Fibonacci");
  } else {
    res.send("I can tell this is not a fibonacci number");
  }
});

/* END */

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
