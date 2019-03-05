const
    express = require('express'),
    route1 = require('./routes/route1');

const app = express();

app.get('/', function (req, res, next) {
    res.send('Hello World');
});

app.use('/route1', route1());

module.exports = app;