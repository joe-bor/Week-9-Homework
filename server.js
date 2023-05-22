const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("This is the root");
});

app.get("/greeting/:name?", (req, res) => {
  if (!req.params.name) res.send("Hello Stranger");
  res.send(`Hello there ${req.params.name}, nice to see you!`);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
