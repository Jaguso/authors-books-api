const express = require('express');
const router = express.Router();

const AuthorsController = require('../controllers/authors');


router.get('/', AuthorsController.author_get_all);
router.post('/', AuthorsController.author_create);

module.exports = router;