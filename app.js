const express = require("express");
const app = express();

const hbs = require("hbs");
hbs.registerPartials(__dirname + "/views/partials");

app.set("view engine", "hbs");
app.set("views", __dirname + "/views");

app.use(express.static("public"));

const authorData = {
  name: "J.R.R. Tolkien",
  birthDate: "03/01/1892",
  birthPlace: "Bloemfontein, South Africa",
  deathDate: "02/09/1973",
  occupation: "author",
  famousWorks: [
    { name: "The Hobbit", releaseYear: "1937" },
    { name: "The Lord of the Rings", releaseYear: "1968" },
  ],
  similarAuthors: [
    { name: "George R.R. Martin", book: "A Game of Thrones" },
    { name: "C.S. Lewis", book: "The Chronicles of Narnia" },
    { name: "Robert Jordan", book: "The Wheel of Time" },
  ],
};

app.get("/", (request, response) => {
  response.render("home");
});

app.get("/about", (request, response) => {
  response.render("about", authorData);
});

app.get("/works", (request, response) => {
  response.render("works");
});

app.get("*", (request, response) => {
  response.send(`This is a default response`);
});

app.listen(3002);
