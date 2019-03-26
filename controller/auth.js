const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

// gerador de token com jwt
function generateToken( params = {}) {
    return jwt.sign(params, process.env.SECRET, {
        expiresIn: 1800000,

    });

}
const authController =  async (req, res) => {
    const { email, password} = req.body;

    const user = await User.findOne({ email }).select('+password');

    if (!user)
        return res.status(400).send({ error: "Usuário não encontrado!"});
    
    if (!await bcrypt.compare(password, user.password))
        return res.status(400).send ({ error: 'Senha invalida'});
// evitando o retorno da senha ao autenticar
    user.password = undefined;

    
    res.send({ 
        user, 
        token: generateToken({ id: user.id }),
    });
};

module.exports = authController;
