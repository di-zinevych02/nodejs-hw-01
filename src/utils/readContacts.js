import { PATH_DB } from '../constants/contacts.js';
// модуль fs, який дає нам можливості працювати із файлами та папками.
import * as fs from "node:fs/promises";
export const readContacts = async () => {
    try {
    const response = await fs.readFile(PATH_DB, { encoding: "utf-8" });
        return JSON.parse(response);
    }
    catch(error) {
    console.log(error);
}
};
