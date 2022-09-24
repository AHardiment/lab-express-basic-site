const express = require("express");
const app = express();

const hbs = require("hbs");
hbs.registerPartials(__dirname + "/views/partials");

app.set("view engine", "hbs");
app.set("views", __dirname + "/views");

app.use(express.static("public"));

app.get("/", (request, response) => {
  response.render("home");
});

app.get("/about", (request, response) => {
  response.render("about");
});

app.get("/works", (request, response) => {
  response.render("works");
});

app.get("*", (request, response) => {
  response.send(`This is a default response`);
});

app.listen(3002);
