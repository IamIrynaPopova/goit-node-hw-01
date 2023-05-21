const fs = require("fs").promises;
const path = require("path");

const contactsPath = path.join("./db", "contacts.json");

async function listContacts() {
  try {
    const data = await fs.readFile(contactsPath);
    const contacts = JSON.parse(data.toString());
    console.table(contacts);
    return contacts;
  } catch (err) {
    console.error(err);
  }
}

// async function getContactById(contactId) {
//   try {
//     const data = await listContacts();
//     const contact = await data.find((contact) => contact.id === contactId);
//     return console.table(contact);
//   } catch (err) {
//     console.error(err);
//   }
// }
// getContactById("drsAJ4SHPYqZeG-83QTVW");


// function addContact(name, email, phone) {
//   // ...твій код
// }



// async function removeContact(contactId) {
//   try {
//     const data = await listContacts();
//     const filterContacts = await data.filter(
//       (contact) => contact.id !== contactId
//     );
//     await fs.writeFile(contactsPath, JSON.stringify(filterContacts));
//     console.log(`Contact with id "${contactId}" was deleted`);
//     return filterContacts;
//   } catch (err) {
//     console.error(err);
//   }
// }

// removeContact("drsAJ4SHPYqZeG-83QTVW");
