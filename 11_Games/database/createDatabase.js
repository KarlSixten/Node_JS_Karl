import db from './connection.js'; //Kaldes her bare for db, selvom den hedder connection i connection.js

// db.all for SELECT statements, for at modtage noget
// db.run execute commands (Insert, update, delete), doesn't return data
// db.exec for schematics without parameters, can contain multiple commands

const deleteMode = process.argv.includes('--delete');

// Sletter games først fordi den har FK til runtime_environments
if (deleteMode) {
    await db.run(`DROP TABLE IF EXISTS games`);
    await db.run(`DROP TABLE IF EXISTS runtime_environments`);
}

// Der findes både INT og INTEGER, auto increment kræver INTEGER
// I text check er 'type' måden man definerer ENUM på
await db.exec(`
CREATE TABLE IF NOT EXISTS runtime_environments (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    platform TEXT,
    version TEXT
);

CREATE TABLE IF NOT EXISTS games (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    short_description VARCHAR(500),
    genre TEXT CHECK( genre IN ('MMO', 'RPG', 'FPS') ),
    runtime_environment_id INTEGER,
    FOREIGN KEY (runtime_environment_id) REFERENCES runtime_environments (id)
);
`);

// Hvis db er blevet reset, seed med ny data.
if (deleteMode) {
    await db.run('INSERT INTO runtime_environments (platform, version) VALUES ("Windows", "10")');
    await db.run('INSERT INTO games (title, short_description, genre, runtime_environment_id) VALUES("Call of Duty", "Game about shooting", "FPS", 1)');
}
