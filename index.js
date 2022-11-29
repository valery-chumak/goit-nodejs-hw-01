const contacts = require("./db/contacts");
// const argv = require("yargs").argv;

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      const allContacts = await contacts.listContacts();
      console.table(allContacts);
      break;

    case "get":
      const contact = await contacts.getContactById(id);
      console.log(contact);
      break;

    case "add":
      const newContact = await contacts.addContact({ name, email, phone });
      console.log(newContact);
      break;

    case "remove":
      const contactRemove = await contacts.removeContact(id);
      console.log(contactRemove);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

// invokeAction({ action: "get", id: 10 });
// invokeAction({
//   action: "add",
//   name: "Irina Cats",
//   email: "ira@gmail.com",
//   phone: "(554) 040-6685",
// });
invokeAction({ action: "remove", id: 10 });
