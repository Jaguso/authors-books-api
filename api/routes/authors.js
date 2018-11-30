const express = require('express');
const router = express.Router();


router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'get all authors'
    });
});


router.post('/', (req, res, next) => {
    res.status(201).json({
        message: 'Create an author'
    });
});

module.exports = router;