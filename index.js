const contacts = require("./db/contacts");
const argv = require("yargs").argv;
const { hideBin } = require("yargs/helpers");

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
      if (argv.name && argv.email && argv.phone) {
        const newContact = await contacts.addContact({ name, email, phone });
        console.log(newContact);
      } else {
        console.log("Sorry. Write all fields(name. email, phone)");
      }

      break;

    case "remove":
      const contactRemove = await contacts.removeContact(id);
      console.log(contactRemove);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}
invokeAction(argv);
