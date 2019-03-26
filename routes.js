const express = require('express');
const routes = express.Router();

const registerController = require('./controller/register'); 
const authController = require('./controller/auth');
const recoveryController = require('./controller/recovery');
const resetController = require('./controller/reset');
const routerController = require('./routerController');


routes.post('/register', registerController);
routes.post('/authenticate', authController);
routes.post('/forgot_password', recoveryController);
routes.post('/reset_password', resetController);
routes.get('/routerController', routerController);





module.exports = routes;