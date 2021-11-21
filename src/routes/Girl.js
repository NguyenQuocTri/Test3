const express= require('express');
const  router = express.Router();

const GirlControllers = require('../app/controllers/GirlControllers');


router.get('/Create', GirlControllers.create);
router.get('/:id/edit', GirlControllers.edit);
router.put('/:id', GirlControllers.update);
router.delete('/:id', GirlControllers.delete);
router.get('/StoredGirl', GirlControllers.storedgirl);
router.post('/Store', GirlControllers.store);
router.get('/:slug', GirlControllers.show)
router.get('/', GirlControllers.index)
// router.get('/:slug', GirlControllers.index)


module.exports = router;
