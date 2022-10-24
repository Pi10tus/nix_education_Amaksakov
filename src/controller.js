const fs = require("fs");
const path = require("path");

const getContacts = () => {
  const data = fs.readFileSync(path.join(__dirname, "contacts.json"));
  return JSON.parse(data);
};
const contacts = getContacts();

const contactDisById = (id) => {
  return contacts.find((c) => c.id.toString() === id);
};

const addContact = (body) => {
  const contact = { ...body, id: Date.now() };
  contacts.push(contact);
  fs.writeFileSync(
    path.join(__dirname, "contacts.json"),
    JSON.stringify(contacts, 2, 2)
  );
  return contact;
};

const updateContact = (id, body) => {
  const index = contacts.findIndex((c) => c.id.toString() === id);
  if (index < 0) return null;
  contacts[index] = { ...contacts[index], ...body };
  fs.writeFileSync(
    path.join(__dirname, "contacts.json"),
    JSON.stringify(contacts, 2, 2)
  );
  return contacts[index];
};

const deleteContact = (id) => {
  console.log(id);
  const index = contacts.findIndex((c) => c.id.toString() === id);
  if (index < 0) return null;
  const d = contacts.splice(index, 1);
  fs.writeFileSync(
    path.join(__dirname, "contacts.json"),
    JSON.stringify(contacts, 2, 2)
  );
  return d;
};
module.exports = {
  getContacts,
  contactDisById,
  addContact,
  updateContact,
  deleteContact,
};
