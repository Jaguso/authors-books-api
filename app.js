const express = require('express');
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose');

const authorRoutes = require('./api/routes/authors');

mongoose.connect(
    'mongodb://author:' + 
    process.env.MONGO_ATLAS_PW + 
    '@cluster0-shard-00-00-t24xm.mongodb.net:27017,cluster0-shard-00-01-t24xm.mongodb.net:27017,cluster0-shard-00-02-t24xm.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true', 
    {
        useNewUrlParser: true
    }
);

app.use(morgan('dev'));

app.use('/authors', authorRoutes);


app.use((req, res, next) => {
    const error = new Error('Not found');
    error.status = 404;
    next(error);
}); 

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

module.exports = app;