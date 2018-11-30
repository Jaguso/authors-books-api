const express = require('express');
const app = express();
const morgan = require('morgan');

const authorRoutes = require('./api/routes/authors');

// app.use((req, res, next) => {
//     res.status(200).json({
//         message: 'It works!'
//     });
// });


app.use('/authors', authorRoutes);



module.exports = app;