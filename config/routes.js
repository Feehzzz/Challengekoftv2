const express = require('express');
const routes = express.Router();

// Variaves referenciando os controladores das rotas
const registerController = require('../controller/register'); 
const authController = require('../controller/auth');
const recoveryController = require('../controller/recovery');
const resetController = require('../controller/reset');
const searchController = require('../controller/find');


// Definição dos métodos e rotas 
routes.post('/register', registerController);
routes.post('/authenticate', authController);
routes.post('/forgot_password', recoveryController);
routes.post('/reset_password', resetController);
routes.get('/find_users', searchController);



module.exports = routes;