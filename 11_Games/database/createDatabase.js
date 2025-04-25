import db from './connection.js'; //Kaldes her bare for db, selvom den hedder connection i connection.js

const deleteMode = process.argv.includes('--delete');

// Sletter games først fordi den har FK til runtime_environments
if (deleteMode) {
    db.run(`DROP TABLE IF EXISTS games`);
    db.run(`DROP TABLE IF EXISTS runtime_environments`);
}

db.exec(`
    CREATE TABLE IF NOT EXISTS runtime_environments (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    platform TEXT,
    version TEXT
);
`);

// Der findes både INT og INTEGER, auto increment kræver INTEGER
// I text check er 'type' måden man definerer ENUM på
db.exec(`
    CREATE TABLE IF NOT EXISTS games (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT,
    short_description VARCHAR(500),
    genre TEXT CHECK( genre IN ('MMO', 'RPG', 'FPS') ),
    runtime_environment_id INTEGER,
    FOREIGN KEY (runtime_environment_id) REFERENCES runtime_environments (id)
);
`);



