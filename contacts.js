import fs from "fs/promises";
import path from "path";
import { nanoid } from "nanoid";

const contactsPath = path.resolve("db","contacts.json");

//const updateContacts = contacts => fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));


export const getListContacts = async () => {
    const result = await fs.readFile(contactsPath);
    return JSON.parse(result);
};

  
export const getContactById = async (id) => {
    const contacts = await getListContacts();
    const result = contacts.find(item => item.id === id);
    return result || null;
}


/*export const addContact = async ({name, email, phone}) => {
    const contacts = await getListContacts();
    const newContact = {
        id: nanoid(),
        name,
        email,
        phone,
    };
    contacts.push(newContact);
    await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
    return newContact;
}*/

/*
function removeContact(contactId) {
  // ...твой код. Возвращает объект удаленного контакта. Возвращает null, если объект с таким id не найден.
}*/

 
