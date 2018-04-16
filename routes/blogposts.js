const express = require('express');
const router = express.Router();
const blogpostsController = require('../controllers/blogposts');

router.get('/', blogpostsController.readAll);
router.get('/:id', blogpostsController.readIndividual);
router.post('/', blogpostsController.create);
router.put('/:id', blogpostsController.update);
router.delete('/:id', blogpostsController.destroy);

module.exports = router;
