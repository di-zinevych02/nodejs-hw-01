
import { readContacts } from '../utils/readContacts.js';
export const countContacts = async () => {
    try {
    const numberContacts = await readContacts();
    const lengthContacts = numberContacts.length;
    if (numberContacts.length === 0) {
        return console.log('No contact list');
    }
        return lengthContacts;
    } catch(error) {
    console.log(error);
        }
};

console.log(await countContacts());
