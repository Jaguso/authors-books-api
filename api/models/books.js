const mongoose = require('mongoose');


const bookSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    author: {type: mongoose.Schema.Types.ObjectId, ref: 'Author', required: true},
    name: {type: String, required: true}
})

module.exports = mongoose.model('Book', bookSchema);