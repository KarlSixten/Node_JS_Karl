import db from './connection.js';

const response = await db.disciplines.updateOne({ name: "Karlsport" }, { $set: { currency: "dkk" }});

console.log(response);