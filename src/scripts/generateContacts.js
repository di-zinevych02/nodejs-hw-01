import { readContacts } from '../utils/readContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import { writeContacts } from '../utils/writeContacts.js';
import { PATH_DB } from '../constants/contacts.js';

const generateContacts = async (number) => {
    let newContact= [];
    try {
    const contacts = await readContacts();
    for (let i = 0; i <= number; i++) {
        newContact.push(createFakeContact());
    }
const updatedContacts = [...contacts, ...newContact];
await writeContacts(updatedContacts, PATH_DB);
    } catch  (error) {
    console.log(error.message);
    }
};

generateContacts(5);
