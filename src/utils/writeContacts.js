
import * as fs from "node:fs/promises";
export const writeContacts = async (updatedContacts, path) => {
    try {
        await fs.writeFile(path, JSON.stringify(updatedContacts, undefined, 2));
        console.log('Successfully data');
    }
    catch(error) {
    console.log(error);
}
};
