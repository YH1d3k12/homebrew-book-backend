const db = require('../database/database.js');

class MagicSchoolRepository
{
    constructor()
    {
        this.tableName = 'MagicSchools';
    }

    /******************** Get ********************/
    async GetAllMagicSchools() 
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
    async GetMagicSchoolById(id) 
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
    async CreateMagicSchool(name)
    {
        const sql = `INSERT INTO ${this.tableName} (name) VALUES(?)`;
        const values = [name];

        return await new Promise((resolve, reject) => {
            db.run(sql, values, function (err) 
            {
                if (err) 
                {
                    reject(err);
                } 
                else 
                {
                    resolve({ message: `Magic School ${name} created successfully.`});
                }
            });
        });
    }

    /******************** Update ********************/
    async UpdateMagicSchool(id, newName) 
    {
        const sql = `UPDATE ${this.tableName} SET name = ? WHERE id = ?`;
        const values = [newName, id];
      
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
                        resolve({message: `Magic School with ${id} was changed.` }); 
                    }
                }
            });
        });
    }

    /******************** Delete ********************/
    async DeleteMagicSchool(id) 
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
                        resolve({message: `Magic School with ${id} was deleted.` }); 
                    }
                }
            });
        });
    }
}

module.exports = MagicSchoolRepository;