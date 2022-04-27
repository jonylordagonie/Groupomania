const express = require("express");
const path = require("path");
const db = require('./database')
const usersRouter = require('./routes/users')
const forumRouter = require("./routes/forum");
const responseRouter = require("./routes/responses");
const cors = require("cors");

app = express();

app.use(express.json())
db.sync()
  .then(console.log('connexion a la db reussis'))
  .catch(error => console.log(error))

app.use(express.json());

app.use(cors());


app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(

    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});


app.use("/images", express.static(path.join(__dirname, "images")));
app.use('/api/users', usersRouter);
app.use("/api/forum", forumRouter);
app.use('/api/responses', responseRouter);

module.exports = app;