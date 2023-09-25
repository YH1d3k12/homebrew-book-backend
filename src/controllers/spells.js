const SpellServices = require('../services/spells.js');

const services = new SpellServices();

class SpellController
{
    async GetAllSpells(req, res)
    {
        try
        {
            const rows = await services.GetAllSpells();

            res.status(200).json({ data: rows });
        }
        catch (error)
        {
            res.status(500).json({
                message: error.message
            });
        }
    };

    async GetSpellByID(req, res)
    {
        try
        {
            const row = await services.GetSpellById(
                req.params.id
            );

            res.status(200).json({ data: row });
        }
        catch (error)
        {
            res.status(500).json({
                message: error.message
            });
        }
    };

    async CreateSpell(req, res)
    {
        try
        {
            const spellData = {
                level: req.body.level,
                name: req.body.name,
                type: req.body.type,
                castingTime: req.body.castingTime,
                range: req.body.range,
                components: req.body.components,
                duration: req.body.duration,
                effect: req.body.effect,
                description: req.body.description,
                upCasting: req.body.upCasting,
                available: req.body.available
            }

            const result = await services.CreateSpell(
                spellData
            );

            res.status(201).json(result);
        }
        catch (error)
        {
            res.status(500).json({
                message: error.message
            });
        }
    };

    async UpdateSpell(req, res)
    {
        try
        {
            const newData = {
                level: req.body.level,
                name: req.body.name,
                type: req.body.type,
                castingTime: req.body.castingTime,
                range: req.body.range,
                components: req.body.components,
                duration: req.body.duration,
                effect: req.body.effect,
                description: req.body.description,
                upCasting: req.body.upCasting,
                available: req.body.available
            }

            const result = await services.UpdateSpell(
                req.params.id,
                newData
            );

            res.status(200).json(result);
        }
        catch (error)
        {
            res.status(500).json({
                message: error.message
            });
        }
    };

    async DeleteSpell(req, res)
    {
        try
        {
            const result = await services.DeleteSpell(
                req.params.id
            );

            res.status(200).json(result);
        }
        catch (error)
        {
            res.status(500).json({
                message: error.message
            });
        }
    };
}

module.exports = SpellController;