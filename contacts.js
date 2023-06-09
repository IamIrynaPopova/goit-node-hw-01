const fs = require("fs").promises;
const path = require("path");
const { v4: uuidv4 } = require("uuid");

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

async function getContactById(contactId) {
  try {
    const data = await listContacts();
    const contact = await data.find((contact) => contact.id === contactId);
    return console.log(contact);
  } catch (err) {
    console.error(err);
  }
}

async function addContact(name, email, phone) {
  try {
    const data = await listContacts();
    data.push({
      id: uuidv4(),
      name,
      email,
      phone,
    });
    await fs.writeFile(contactsPath, JSON.stringify(data));
    console.log("Update contacts:");
    console.table(data);
    console.log(`Contact "${name}" was added to the phonebook`);
    return data;
  } catch (err) {
    console.error(err);
  }
}

async function removeContact(contactId) {
  try {
    const data = await listContacts();
    const filterContacts = await data.filter(
      (contact) => contact.id !== contactId
    );
    await fs.writeFile(contactsPath, JSON.stringify(filterContacts));
    console.log("Update contacts:");
    console.table(filterContacts);
    console.log(`Contact with id "${contactId}" was deleted`);
    return filterContacts;
  } catch (err) {
    console.error(err);
  }
}

module.exports = {
  listContacts,
  getContactById,
  addContact,
  removeContact,
};
