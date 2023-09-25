const express = require('express');
const SpellController = require('../controllers/spells.js');

const controller = new SpellController();
const router = express.Router();

router.get('/', controller.GetAllSpells);
router.get('/:id', controller.GetSpellByID);
router.post('/', controller.CreateSpell);
router.put('/:id', controller.UpdateSpell);
router.delete('/:id', controller.DeleteSpell);

module.exports = router;