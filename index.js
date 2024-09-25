const express = require("express");
require("dotenv").config();

const app = express();
// const port = 3000;

fetch("https://api.github.com/users/abdullahrashid1638")
  .then((response) => response.json())
  .then((data) => {
    app.get("/github", (req, res) => {
      res.json(data);
    });
  });

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/twitter", (req, res) => {
  res.send("hitesh");
});

app.get("/login", (req, res) => {
  res.send("<h1>Please Login</h1>");
});

app.get("/youtube", (req, res) => {
  res.send(
    '<h2><a href="https://www.youtube.com/@chaiaurcode">Chai aur code</a></h2>'
  );
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});
