import * as contactsDetails from "./contacts.js";

const invokeAction = async ({ action, id, name, email, phone }) => {
    switch (action) {
        case "list":
            const allContacts = await contactsDetails.getListContacts();
            return console.log(allContacts);
        case "getById":
            const oneContact = await contactsDetails.getContactById(id);
            return console.log(oneContact);
        case "add":
            const newContact = await contactsDetails.addContact(name, email, phone);
            return console.log(newContact);
        default:
            console.log("Unknown action");
    }
}


//invokeAction({ action: "list" })
//invokeAction({ action: "getById", id: "e6ywwRe4jcqxXfCZOj_1e" })
//nvokeAction({action: "add", name:"New friend", email:"newFriend@gmail.com", phone:"(111)111-1111"})