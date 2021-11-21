const express= require('express');
const  router = express.Router();

const BeltControllers = require('../app/controllers/BeltControllers');

router.get('/Create', BeltControllers.create);
router.get('/:id/edit', BeltControllers.edit);
router.put('/:id', BeltControllers.update);
router.delete('/:id', BeltControllers.delete);
router.get('/StoredBelt', BeltControllers.storedbelt);
router.post('/Store', BeltControllers.store);
router.get('/:slug', BeltControllers.show)
router.get('/', BeltControllers.index)

module.exports = router;