const express = require("express");
const database = require("../db.js");
const ObjectId = require("mongodb").ObjectId;
const api = express.Router();

api.post("/doc", async (req, res) => {
  try {
    const { html, name } = req.body;
    if (!html || !name) {
      res.status(400).send({
        message: "Please send name and html in json body",
      });
    }
    const doc = {
      name,
      html,
    };
    const db = await (await database.getDb()).collection;

    await db.insertOne(doc);

    res.send({
      message: "Document has been saved successfully",
    });
  } catch (err) {
    res.status(500).send({
      message: "server error",
    });
  }
});

api.put("/doc", async (req, res) => {
  try {
    const { html, name, id } = req.body;
    if (!html || !name || !id) {
      res.status(400).send({
        message: "Please send name and html and id in json body",
      });
    }

    const filter = { _id: ObjectId(id) };

    const db = await (await database.getDb()).collection;

    await db.updateOne(filter, {
      $set: { name, html },
    });

    res.send({
      message: "Document has been updated successfully",
    });
  } catch (err) {
    console.log("err", err);
    res.status(500).send({
      message: "server error",
    });
  }
});

api.get("/doc", async (req, res) => {
  try {
    const db = await database.getDb();
    const resultSet = await db.collection.find({}).toArray();

    res.send(resultSet);
  } catch (err) {
    console.log("err", err);
    res.status(500).send({
      message: "server error",
    });
  }
});

module.exports = api;
