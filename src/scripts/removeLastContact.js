import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';
import { PATH_DB } from '../constants/contacts.js';

export const removeLastContact = async () => {
    try {
        const contacts = await readContacts();
        if (contacts.length === 0) {
            return console.log('Unable to delete contact because it is an empty array');
        }
        contacts.pop();
        await writeContacts(contacts, PATH_DB);
    } catch (error) {
console.log(error.message);

    }
 };

removeLastContact();
