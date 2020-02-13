const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const path = require("path");
const withAuth = require("./middleware/withAuth");
const dotenv = require("dotenv");
dotenv.config();
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

app.use(express.static(path.join(__dirname, "public")));

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/api/home", function(req, res) {
  res.send("Welcome!");
});

app.get("/api/secret", withAuth, function(req, res) {
  console.log(req.email)
  res.send("I'am private");
});

app.get("/api/check/token", withAuth, function(req, res) {
  console.log(req.email)
  res.send({email: req.email});
});

const authRouter = require("./router/auth");
app.use("/api/auth", authRouter);


app.listen(process.env.PORT || 8080);
