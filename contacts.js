import fs from "fs/promises";
import path from "path";

const contactsPath = path.resolve("db","contacts.json");
console.log(contactsPath)
//const updateContacts = contacts => fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));


// Возвращает массив контактов.
export const listContacts = async () => {
    const result = await fs.readFile(contactsPath);
    return JSON.parse(result);
};
/*
// TODO: задокументировать каждую функцию


function getContactById(contactId) {
  // ...твой код. Возвращает объект контакта с таким id. Возвращает null, если объект с таким id не найден.
}

function removeContact(contactId) {
  // ...твой код. Возвращает объект удаленного контакта. Возвращает null, если объект с таким id не найден.
}

function addContact(name, email, phone) {
  // ...твой код. Возвращает объект добавленного контакта. 
}*/