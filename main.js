const express = require("express");
const app = express();
const host = "localhost";
const port = 8000;
const {
  contactsDisplayAll,
  contactDisById,
  addContact,
  updateContact,
  deleteContact,
} = require("./src/controller.js");
const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.get("/contacts", (req, res) => {
  res.send(contactsDisplayAll());
});

app.get("/contacts/:id", (req, res) => {
  const contact = contactDisById(req.params.id);
  if (contact) {
    res.status(200).send(contact);
  }
  res.status(400).send({ message: "Contact not found" });
});

app.post("/contacts", (req, res) => {
  if (["name", "email", "phone"].every((k) => req.body[k])) {
    const contact = addContact(req.body);
    res.status(201).send(contact);
  }
  res.status(400).send({ message: "missing required name field" });
});

app.delete("/contacts/:id", (req, res) => {
  const contact = deleteContact(req.params.id);
  if (contact) {
    res.status(200).send({ message: "Contact deleted" });
  }
  res.status(404).send({ message: "Contact not found" });
});

app.patch("/contacts/:id", (req, res) => {
  if (["name", "email", "phone"].some((k) => req.body[k])) {
    const contact = updateContact(req.params.id, req.body);
    if (contact) {
      res.status(200).send(contact);
    }
    res.status(400).send({ message: "Contact not found" });
  }
  res.status(400).send({ message: "Missing fields" });
});

app.listen(port, host, function () {
  console.log(`Server is running on http://${host}:${port}`);
});
