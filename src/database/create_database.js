const db = require('./database.js');

// Definir a estrutura da tabela
const magicSchools = `
    CREATE TABLE IF NOT EXISTS MagicSchools 
    (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL
    )
`;

// Creating tables if they don't exists
db.run(magicSchools, (err) => {
    if (err) 
    { 
        return console.error(err.message);
    }

    console.log('Table created successfully.');
});

/************ Spells table ************/

const spells = `
    CREATE TABLE IF NOT EXISTS Spells
    (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        level INTEGER,
        name TEXT,
        type INTEGER,
        castingTime TEXT,
        range TEXT,
        components TEXT,
        duration TEXT,
        effect TEXT,
        description TEXT,
        upCasting TEXT,
        available TEXT,
        FOREIGN KEY (type) REFERENCES MagicSchools(id)
    )
`;

// Creating tables if they don't exists
db.run(spells, (err) => {
    if (err) 
    { 
        return console.error(err.message);
    }

    console.log('Table created successfully.');
});