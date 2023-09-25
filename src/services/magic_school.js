const MagicSchoolRepository = require('../repositories/magic_school.js');

const repositories = new MagicSchoolRepository();

class MagicSchoolServices
{
    async GetAllMagicSchools()
    {
        const rows = await repositories.GetAllMagicSchools(); 
        return rows
    }

    async GetMagicSchoolById(id)
    {
        const row = await repositories.GetMagicSchoolById(id);
        return row;
    }

    async CreateMagicSchool(name)
    {
        const result = await repositories.CreateMagicSchool(name);
        return result;
    }

    async UpdateMagicSchool(id, newName)
    {
        const result = await repositories.UpdateMagicSchool(id, newName);
        return result;
    }

    async DeleteMagicSchool(id)
    {
        const result = await repositories.DeleteMagicSchool(id);
        return result;
    }
};

module.exports = MagicSchoolServices;