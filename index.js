<<<<<<< Updated upstream
if( process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
=======
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
>>>>>>> Stashed changes
}
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
global.DEBUG = true;

<<<<<<< Updated upstream
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, (err) => {
    if (err) console.log(err);
    console.log(`Simple app running on port ${PORT}.`)
});

app.get('/', async (req, res) => {
    res.render('index');
});

app.get('/about', async (req, res) => {
    res.render('about');
=======
//log events
const logEvents = require("./logEvents");
const EventEmitter = require("events");
class MyEmitter extends EventEmitter {}

// init object
const myEmitter = new MyEmitter();

//add listener for the log event
myEmitter.on("log", (msg) => logEvents(msg));

setTimeout(() => {
  //emit event
  myEmitter.emit("log", "Log evemt emitted!");
}, 2000);

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, (err) => {
  if (err) console.log(err);
  console.log(`Simple app running on port ${PORT}.`);
});

app.get("/", async (req, res) => {
  res.render("index");
});

app.get("/about", async (req, res) => {
  res.render("about");
>>>>>>> Stashed changes
});

app.use((req, res) => {
<<<<<<< Updated upstream
    res.status(404).render('404');
=======
  res.status(404).render("404");
>>>>>>> Stashed changes
});

