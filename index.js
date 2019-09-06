// import das dependencias
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const webport = process.env.PORT || 3000;
const app = express();
const cors = require('cors');
const routes = require('./config/routes')



// faz com que o node entenda as requisições recebendo em json e url
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors())
app.use('/', routes);


app.listen(webport, () => {
    console.log('Server is running on port ' + webport);
});