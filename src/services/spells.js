const SpellsRepository = require('../repositories/spells.js');

const repositories = new SpellsRepository();

class SpellServices
{
    async GetAllSpells()
    {
        const rows = await repositories.GetAllSpells(); 
        return rows
    }

    async GetSpellById(id)
    {
        const row = await repositories.GetSpellById(id);
        return row;
    }

    async CreateSpell(spellData)
    {
        const result = await repositories.CreateSpell(spellData);
        return result;
    }

    async UpdateSpell(id, newData)
    {
        const result = await repositories.UpdateSpell(id, newData);
        return result;
    }

    async DeleteSpell(id)
    {
        const result = await repositories.DeleteSpell(id);
        return result;
    }
};

module.exports = SpellServices;