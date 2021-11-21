const express= require('express');
const  router = express.Router();

const ClotheControllers = require('../app/controllers/ClotheControllers');

router.get('/Create', ClotheControllers.create);
router.get('/:id/edit', ClotheControllers.edit);
router.put('/:id', ClotheControllers.update);
router.delete('/:id', ClotheControllers.delete);
router.get('/StoredClothes', ClotheControllers.storedclothe);
router.post('/Store', ClotheControllers.store);
router.get('/:slug', ClotheControllers.show)
router.get('/', ClotheControllers.index)

module.exports = router;