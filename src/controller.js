const fs = require("fs");
const path = require("path");

const contactsDisplayAll = () => {
  const data = fs.readFileSync(path.join(__dirname, "contacts.json"));
  return JSON.parse(data);
};

const contactDisById = (id) => {
  const contacts = contactsDisplayAll();
  return contacts.find((c) => c.id.toString() === id);
};

const addContact = (body) => {
  const contacts = contactsDisplayAll();
  const contact = { ...body, id: Date.now() };
  contacts.push(contact);
  fs.writeFileSync(
    path.join(__dirname, "contacts.json"),
    JSON.stringify(contacts, 2, 2)
  );
  return contact;
};

const updateContact = (id, body) => {
  const contacts = contactsDisplayAll();
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
  const contacts = contactsDisplayAll();
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
  contactsDisplayAll,
  contactDisById,
  addContact,
  updateContact,
  deleteContact,
};
