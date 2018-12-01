const mongoose = require('mongoose');

const Book = require('../models/books');

exports.book_create = (req, res, next) => {
    const book = new Book({
        _id: mongoose.Types.ObjectId(),
        name: req.body.name,
        author: req.body.authorId
    });
    book
        .save()
        .then(result => {
            console.log(result);
            res.status(201).json(result);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
}