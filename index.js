import fs from "fs/promises";
import path from "path";

//const contactsPath = path.resolve("db", "contacts.json");

const func = async () => {
   // const text = await fs.readFile(contactsPath, "utf-8");
    const result = await fs.appendFile(contactsPath, "Have a nice day, mentor!");
    console.log(result);
}

func(); 
