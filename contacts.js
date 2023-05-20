const fs = require("fs").promises;
const path = require("path");

const contactsPath = path.join("./db", "contacts.json");
const contacts = fs
  .readFile(contactsPath)
  .then((data) => {
    const contacts = JSON.parse(data.toString());
    return listContacts(contacts);
  })
  .catch((err) => console.error(err));

function listContacts(data) {
  console.log(typeof data);
  data.map((contact) => {
    const { id, name, email, phone } = contact;
    return console.table(contact);
  });
}

// function getContactById(contactId) {
//   // ...твій код
// }

// function removeContact(contactId) {
//   // ...твій код
// }

// function addContact(name, email, phone) {
//   // ...твій код
// }
