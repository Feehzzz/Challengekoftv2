// import das dependencias
const express = require('express');
const bodyParser = require('body-parser');
var webport = process.env.webport || 3000;
const app = express();

require('dotenv').config();


// faz com que o node entenda as requisições recebendo em json e url
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(require('./routes'));
app.use(require('./routerController'));


app.listen(webport, () => {
    console.log("Server is running on port " + webport);
});