const express = require('express');
const MagicSchoolController = require('../controllers/magic_schools.js');

const controller = new MagicSchoolController();
const router = express.Router();

router.get('/', controller.GetAllMagicSchools);
router.get('/:id', controller.GetMagicSchoolById);
router.post('/', controller.CreateMagicSchool);
router.put('/:id', controller.UpdateMagicSchool);
router.delete('/:id', controller.DeleteMagicSchool);

module.exports = router;