const express = require("express");
const app = express();
const host = "localhost";
const port = 8000;
const {
  contactDisById,
  addContact,
  updateContact,
  deleteContact,
  // getContacts,
} = require("./src/controller.js");
const username = encodeURIComponent("Pilotus42");
const password = encodeURIComponent("fZ86JkEjrjJiYz5A");
const { MongoClient } = require("mongodb");
let uri = `mongodb+srv://${username}:${password}@cluster0.cekqq4q.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(uri);
async function connect() {
  try {
    await client.connect();
    const database = client.db("Maksakov_edu_nix");
    const ratings = database.collection("Collection0");
    const cursor = ratings.find();
    const data1 = [];
    await cursor.forEach((doc) => data1.push(doc));
    return await data1;
  } finally {
    await client.close();
  }
}

connect().then((data) => {
  const bodyParser = require("body-parser");

  app.use(bodyParser.json());

  app.get("/contacts", (req, res) => {
    res.send(data);
  });

  app.get("/contacts/:id", (req, res) => {
    const contact = contactDisById(req.params.id, data);
    if (contact) {
      res.status(200).send(contact);
    } else {
      res.status(400).send({ message: "Contact not found" });
    }
  });

  app.post("/contacts", (req, res) => {
    if (["name", "email", "phone"].every((k) => req.body[k])) {
      const contact = addContact(req.body, data);
      res.status(201).send(contact);
    } else {
      res.status(400).send({ message: "missing required name field" });
    }
  });

  app.delete("/contacts/:id", (req, res) => {
    const contact = deleteContact(req.params.id, data);
    if (contact) {
      res.status(200).send({ message: "Contact deleted" });
    } else {
      res.status(404).send({ message: "Contact not found" });
    }
  });

  app.patch("/contacts/:id", (req, res) => {
    if (["name", "email", "phone"].some((k) => req.body[k])) {
      const contact = updateContact(req.params.id, req.body, data);
      if (contact) {
        res.status(200).send(contact);
      }
      res.status(400).send({ message: "Contact not found" });
    } else {
      res.status(400).send({ message: "Missing fields" });
    }
  });

  app.listen(port, host, function () {
    console.log(`Server is running on http://${host}:${port}`);
  });
});
