const MagicSchoolServices = require('../services/magic_school');

const services = new MagicSchoolServices();

class MagicSchoolController
{
    async GetAllMagicSchools(req, res)
    {
        try
        {
            const rows = await services.GetAllMagicSchools();

            res.status(200).json({ data: rows });
        }
        catch (error)
        {
            res.status(500).json({
                message: error.message
            });
        }
    };

    async GetMagicSchoolById(req, res)
    {
        try
        {
            const row = await services.GetMagicSchoolById(
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

    async CreateMagicSchool(req, res)
    {
        try
        {
            const result = await services.CreateMagicSchool(
                req.body.name
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

    async UpdateMagicSchool(req, res)
    {
        try
        {
            const result = await services.UpdateMagicSchool(
                req.params.id,
                req.body.newName
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

    async DeleteMagicSchool(req, res)
    {
        try
        {
            const result = await services.DeleteMagicSchool(
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

module.exports = MagicSchoolController;