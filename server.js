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
    Number.isFinite(req.params.total) ||
    Number.isFinite(req.params.tipPercentage)
  ) {
    res.send("Both params must be a finite number!");
    console.log("both params must be finite");
  } else {
    res.send(`tip = ${tip}`);
  }
});

/* END */

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
