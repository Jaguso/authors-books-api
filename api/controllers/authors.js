const mongoose = require('mongoose');

const Author = require('../models/authors');

exports.author_create = (req, res, next) => {
    const author = new Author({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        nationality: req.body.nationality
    });
    author.save().then(result => {
        console.log(result);
    })
    .catch(err => console.log(err));

    res.status(201).json({
        message: 'Created an author'
    });
}


exports.author_get_all = (req, res, next) => {
    Author.find()
        .exec()
        .then(docs => {
            console.log(docs);
            res.status(200).json(docs);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
}