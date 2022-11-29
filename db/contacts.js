const fs = require("fs").promises;
const path = require("path");
const contactsPath = path.join(__dirname, "contacts.json");

fs.readFile(contactsPath, "utf-8");

// TODO: задокументировать каждую функцию
function listContacts() {
  // ...твой код
}

function getContactById(contactId) {
  // ...твой код
}

function removeContact(contactId) {
  // ...твой код
}

function addContact(name, email, phone) {
  // ...твой код
}
console.log(contactsPath);
module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
