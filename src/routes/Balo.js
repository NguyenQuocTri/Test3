const express= require('express');
const  router = express.Router();

const BaloControllers = require('../app/controllers/BaloControllers');


router.get('/Create', BaloControllers.create);
router.get('/:id/edit', BaloControllers.edit);
router.put('/:id', BaloControllers.update);
router.delete('/:id', BaloControllers.delete);
router.get('/StoredBalo', BaloControllers.storedbalo);
router.post('/Store', BaloControllers.store);
router.get('/:slug', BaloControllers.show)
router.get('/', BaloControllers.index)
// router.get('/:slug', BaloControllers.index)


module.exports = router;
