const express= require('express');
const  router = express.Router();

const BoyControllers = require('../app/controllers/BoyControllers');

router.get('/Create', BoyControllers.create);
router.get('/:id/edit', BoyControllers.edit);
router.put('/:id', BoyControllers.update);
router.delete('/:id', BoyControllers.delete);
router.get('/StoredBoy', BoyControllers.storedboy);
router.post('/Store', BoyControllers.store);
router.get('/:slug', BoyControllers.show)
router.get('/', BoyControllers.index)

module.exports = router;