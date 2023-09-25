const db = require('../database/database.js');

class SpellsRepository
{
    constructor()
    {
        this.tableName = 'Spells';
    }

    /******************** Get ********************/
    async GetAllSpells() 
    {
        const sql = `SELECT * FROM ${this.tableName}`;
 
        const rows = await new Promise((resolve, reject) => {
            db.all(sql, [], (err, rows) => {
                if (err) 
                {
                    reject(err);
                } 
                else 
                {
                    resolve(rows);
                }
            });
        }) 

        return rows;
    }

    /******************** Get by id ********************/
    async GetSpellById(id) 
    {
        const sql = `SELECT * FROM ${this.tableName} WHERE id = ?`;
        const values = [id];
    
        const row = await new Promise((resolve, reject) => {
            db.all(sql, values, (err, row) => {
                if (err) 
                {
                    reject(err);
                } 
                else 
                {
                    resolve(row);
                }
            });
        }) 

        return row;
    }

    /******************** Create ********************/
    async CreateSpell(spellData) //Receives spell data as an object
    {
        // We break down the spellData values and insert them into individual variables with the same name
        const {
            level,
            name,
            type,
            castingTime,
            range,
            components,
            duration,
            effect,
            description,
            upCasting,
            available
        } = spellData;
        
        const sql = `INSERT INTO ${this.tableName} (level, name, type, castingTime, range, components, duration, effect, description, upCasting, available) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
        
        // Now the following array 'values' receives the values from spellData
        const values = [
            level,
            name,
            type,
            castingTime,
            range,
            components,
            duration,
            effect,
            description,
            upCasting,
            available
        ];

        return await new Promise((resolve, reject) => {
            db.run(sql, values, function (err) 
            {
                if (err) 
                {
                    reject(err);
                } 
                else 
                {
                    resolve({ message: `Spell ${name} created successfully.`});
                }
            });
        });
    }

    /******************** Update ********************/
    async UpdateSpell(id, newData) 
    {
        const {
            level,
            name,
            type,
            castingTime,
            range,
            components,
            duration,
            effect,
            description,
            upCasting,
            available
        } = newData;

        const sql = `UPDATE ${this.tableName} SET level = ?, name = ?, type = ?, castingTime = ?, range = ?, components = ?, duration = ?, effect = ?, description = ?, upCasting = ?, available = ? WHERE id = ?`;
        
        const values = [
            level,
            name,
            type,
            castingTime,
            range,
            components,
            duration,
            effect,
            description,
            upCasting,
            available,
            id
        ];
      
        return await new Promise((resolve, reject) => {
            db.run(sql, values, function (err) {
                if (err) 
                {
                    reject(err);
                } 
                else 
                {
                    if (this.changes > 0)
                    {
                        resolve({message: `Spell with ${id} was changed.` }); 
                    }
                }
            });
        });
    }

    /******************** Delete ********************/
    async DeleteSpell(id) 
    {
        const sql = `DELETE FROM ${this.tableName} WHERE id = ?`;
        const values = [id];
      
        return await new Promise((resolve, reject) => {
            db.run(sql, values, function (err) {
                if (err) 
                {
                    reject(err);
                } 
                else 
                {
                    if (this.changes > 0)
                    {
                        resolve({message: `Spell with ${id} was deleted.` }); 
                    }
                }
            });
        });
    }
}

module.exports = SpellsRepository;