const db = require('./database.js');

// Table structure
const magicSchools = `
    CREATE TABLE IF NOT EXISTS MagicSchools 
    (
        id INTEGER PRIMARY KEY,
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
        id INTEGER PRIMARY KEY,
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

/************ Species table ************/

const species = `
    CREATE TABLE IF NOT EXISTS Species
    (
        id INTEGER PRIMARY KEY,
        name TEXT,
        type TEXT,
        img TEXT,
        description TEXT,
    )
`;

// Creating tables if they don't exists
db.run(species, (err) => {
    if (err) 
    { 
        return console.error(err.message);
    }

    console.log('Table created successfully.');
});