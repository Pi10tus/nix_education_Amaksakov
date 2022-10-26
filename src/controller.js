const fs = require("fs");
const path = require("path");

// const getContacts = () => {
//   const data = fs.readFileSync(path.join(__dirname, "contacts.json"));

//   return JSON.parse(data);
// };
// const contacts = getContacts();

const contactDisById = (id, data) => {
  return data.find((c) => c.id.toString() === id);
};

const addContact = (body, data) => {
  const contact = { ...body, id: Date.now() };
  data.push(contact);
  fs.writeFileSync(
    path.join(__dirname, "contacts.json"),
    JSON.stringify(contacts, 2, 2)
  );
  return contact;
};

const updateContact = (id, body, data) => {
  const index = data.findIndex((c) => c.id.toString() === id);
  if (index < 0) return null;
  data[index] = { ...data[index], ...body };
  fs.writeFileSync(
    path.join(__dirname, "contacts.json"),
    JSON.stringify(data, 2, 2)
  );
  return data[index];
};

const deleteContact = (id, data) => {
  console.log(id);
  const index = data.findIndex((c) => c.id.toString() === id);
  if (index < 0) return null;
  const d = data.splice(index, 1);
  fs.writeFileSync(
    path.join(__dirname, "contacts.json"),
    JSON.stringify(data, 2, 2)
  );
  return d;
};
module.exports = {
  // getContacts,
  contactDisById,
  addContact,
  updateContact,
  deleteContact,
};
