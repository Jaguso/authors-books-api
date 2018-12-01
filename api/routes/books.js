const express = require('express');
const router = express.Router();

const BooksController = require('../controllers/books');

router.post('/', BooksController.book_create);


module.exports = router;