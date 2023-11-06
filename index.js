import * as contactsDetails from "./contacts.js";
import { program } from "commander";

const invokeAction = async ({ action, id, name, email, phone }) => {
    switch (action) {
        case "list":
            const allContacts = await contactsDetails.getListContacts();
            return console.table(allContacts);
        case "get":  //getById
            const oneContact = await contactsDetails.getContactById(id);
            return console.log(oneContact);
        case "add":
            const newContact = await contactsDetails.addContact({ name, email, phone });
            return console.log(newContact);
        case "remove":  //deleteById
            const deleteContact = await contactsDetails.removeContact(id);
            return console.log(deleteContact);
        default:
            console.log("Unknown action");
    }
}

program
  .option('-a, --action <type>', 'choose action')
  .option('-i, --id <type>', 'user id')
  .option('-n, --name <type>', 'user name')
  .option('-e, --email <type>', 'user email')
  .option('-p, --phone <type>', 'user phone');

program.parse();

const options = program.opts();
invokeAction(options);

