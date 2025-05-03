import db from './connection.js';

const response = await db.disciplines.deleteOne({ name: "Karlsport" });

console.log(response);