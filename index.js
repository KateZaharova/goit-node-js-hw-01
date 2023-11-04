import * as contactsDetails from "./contacts.js";

const invokeAction = async ({ action }) => {
    switch (action) {
        case "list":
            const allContacts = await contactsDetails.getAllContacts();
            return console.log(allContacts);
        default:
            console.log("Unknown action");
    }
}


//invokeAction({action:"list"})