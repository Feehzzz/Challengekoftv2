// conexão com banco de dados
const mongoose = require('mongoose');

mongoose.connect(`mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}`,{
    useNewUrlParser: true, useCreateIndex: true });


module.exports = mongoose; 