const express = require("express");
const cors = require("cors");
const router = require("express").Router();
const app = express();
const Form = require("./FormModel");
const body_parser = require("body-parser");
require("./mongoose");
//Middlewares
//Routes

app.use(cors());
app.use(body_parser.urlencoded({ extended: false }));
app.use(express.json());
app.use(router);

router.post("/inscrire", async (req, res) => {
  const options = req.body;
  console.log(options);
  const form = new Form(options);
  try {
    await form.save();
  } catch (err) {
    console.log(err);
    return res.send(err);
  }
  return res.status(201).send(form);
});

router.get("/", (req, res) => {
  res.send("Home Server");
});
app.listen(3000);
