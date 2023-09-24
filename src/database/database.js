const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbPath = path.join(__dirname, 'database.db');

// Connecting to database
const db = new sqlite3.Database(dbPath, sqlite3.OPEN_READWRITE, (err) => {
    if (err) 
    { 
        return console.error(err.message);
    } 
        
    console.log('Connection successfull to the database.');
});

module.exports = db;