const
    port = 80,
    app = require('./app');

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});