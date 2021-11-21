const express= require('express');
const  router = express.Router();

const PerfumeControllers = require('../app/controllers/PerfumeControllers');


router.get('/Create', PerfumeControllers.create);
router.get('/:id/edit', PerfumeControllers.edit);
router.put('/:id', PerfumeControllers.update);
router.delete('/:id', PerfumeControllers.delete);
router.get('/StoredBalo', PerfumeControllers.storedperfume);
router.post('/Store', PerfumeControllers.store);
router.get('/:slug', PerfumeControllers.show)
router.get('/', PerfumeControllers.index)
// router.get('/:slug', PerfumeControllers.index)


module.exports = router;
