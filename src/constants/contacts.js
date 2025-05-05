import path from 'node:path'; // const fs = require("node:fs/promises");
import { fileURLToPath } from 'node:url';
const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);
export const PATH_DB = path.join(dirname, '..', 'db', 'db.json'); //шлях до файлу src/db/db.json.(можна прописати ще так '../db/db.json')
