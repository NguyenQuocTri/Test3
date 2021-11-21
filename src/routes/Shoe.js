const express= require('express');
const  router = express.Router();

const ShoeControllers = require('../app/controllers/ShoeControllers');


router.get('/Create', ShoeControllers.create);
router.get('/:id/edit', ShoeControllers.edit);
router.put('/:id', ShoeControllers.update);
router.delete('/:id', ShoeControllers.delete);
router.get('/StoredShoe', ShoeControllers.storedshoe);
router.post('/Store', ShoeControllers.store);
router.get('/:slug', ShoeControllers.show)
router.get('/', ShoeControllers.index)
// router.get('/:slug', ShoeControllers.index)


module.exports = router;
