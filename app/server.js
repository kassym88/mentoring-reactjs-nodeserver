const
    http = require('http'),
    // https = require('https'),
    app = require('./app');

const httpServer = http.createServer(app);
httpServer.listen(80, () => {
    const host = httpServer.address().address;
    const port = httpServer.address().port;
    console.log(`Server listening at http://${host === '::' ? 'localhost' : host}:${port}`);
});

// SSL Server
// const httpsServer = https.createServer({}, app);
// httpsServer.listen(443, () => {
//     const host = httpsServer.address().address;
//     const port = httpsServer.address().port;
//     console.log(`SSL server listening at http://${host === '::' ? 'localhost' : host}:${port}`);
// });