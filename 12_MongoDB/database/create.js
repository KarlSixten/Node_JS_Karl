import db from './connection.js';

const response = await db.disciplines.insertOne({ name: "Karlsport", price: 300 });

console.log(response);