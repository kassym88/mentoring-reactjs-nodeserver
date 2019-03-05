const express = require('express');
const router = express.Router();

module.exports = () => {

    router.use('/ex1', (req, res, next) => {
        res.send('route1')
    });

    return router;
};