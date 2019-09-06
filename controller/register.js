const jwt = require('jsonwebtoken');

const User = require('../models/user');

function generateToken( params = {}) {
    return jwt.sign(params, process.env.SECRET, {
        expiresIn: 1800000,

    });

};

const registerController = async (req, res) => {
    const { email } = req.body;
    
    try {
        if (await User.findOne({ email }))
            return res.status(400).json({ error: 'Email já cadastrado' });

        const user = await User.create(req.body);  
        // evitando o retorno da senha ao criar cadastro
        user.password = undefined;

        return res.json({ 
            user, 
            token: generateToken({ id: user.id }),
        });
    }   catch (err) {
        
       return res.status(400).json ({ error: 'Registration fail ' + err.message });
        
    }
    
};

module.exports = registerController;
