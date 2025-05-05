import { writeContacts } from '../utils/writeContacts.js';
import { PATH_DB } from '../constants/contacts.js';
export const removeAllContacts = async () => {
    try {
        await writeContacts([], PATH_DB);
        console.log('Successfully remove');
    } catch (error) {
        console.error('Error deleting contacts:', error.message);
    }
};

removeAllContacts();
