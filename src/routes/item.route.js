const express = require('express');
const router = express.Router();


const item_controller = require('../controllers/item.controller');

router.get('/all', item_controller.all);
router.post('/create', item_controller.create);
router.get('/:id', item_controller.details);


module.exports = router;