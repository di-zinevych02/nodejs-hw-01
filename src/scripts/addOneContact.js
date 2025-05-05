
import { readContacts } from '../utils/readContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import { writeContacts } from '../utils/writeContacts.js';
import { PATH_DB } from '../constants/contacts.js';

const addOneContact = async () => {
    try {

        const contacts = await readContacts();
        const oneNewContact = createFakeContact();
const updateContacts = [...contacts, oneNewContact];
        contacts.push(oneNewContact);
        await writeContacts(updateContacts, PATH_DB);
    } catch  (error) {
    console.log(error.message);
    }
};

addOneContact();
