const app = require('./app');

let PORT = process.env.PORT || 8080;//Assimila a porta contida em process.env.port ou o valor 8080.

app.listen(PORT, () => {
    console.log(`App listen on port : ${PORT}`);
});