
import { readContacts } from '../utils/readContacts.js';
export const getAllContacts = async () => { 
try {
    const readAllContacts = await readContacts();
    return readAllContacts;
} catch (error) {
    console.log(error);
}
};
console.log(await getAllContacts());
