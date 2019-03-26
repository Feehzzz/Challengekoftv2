const express = require('express');
const authMiddleware = require('./controller/middleware');
const router = express.Router();

router.use(authMiddleware);


const routerController = (req, res, next) => {
    res.send({ ok: true});
};

module.exports = routerController;
