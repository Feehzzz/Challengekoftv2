const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

// gerador de token com jwt
function generateToken( params = {}) {
    return jwt.sign( params, process.env.SECRET, {
        expiresIn: 180000,

    });

}
const authController =  async (req, res) => {
    
    const { email, password } = req.body;

    const user = await User.findOne({ email }).select('+password');
    // caso não encontre o usuario
    if (!user)
        return res.status(400).json({ error: 'Usuário não encontrado!' });
    // caso senha nao bata com senha do usuario encontrado
    if (!await bcrypt.compare( password, user.password ))
        return res.status(400).json({ error: 'Senha invalida'});
    // evitando o retorno da senha ao autenticar
    user.password = undefined;
   
    const now = new Date();
    // atualiza a hora conforme o mesmo efetua login
    await User.findByIdAndUpdate(user.id, {
        '$set': { lastLogon: now }
    });

    
    return res.json({ 
        user, 
        token: generateToken({ id: user.id })
        
    });
};

module.exports = authController;
