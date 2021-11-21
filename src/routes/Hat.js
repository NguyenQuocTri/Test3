const express= require('express');
const  router = express.Router();

const HatControllers = require('../app/controllers/HatControllers');


router.get('/Create', HatControllers.create);
router.get('/:id/edit', HatControllers.edit);
router.put('/:id', HatControllers.update);
router.delete('/:id', HatControllers.delete);
router.get('/StoredHat', HatControllers.storedhat);
router.post('/store', HatControllers.store);
router.get('/:slug', HatControllers.show)
router.get('/', HatControllers.index)
// router.get('/:slug', HatControllers.index)


module.exports = router;
