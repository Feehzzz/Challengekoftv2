const jwt = require('jsonwebtoken');
const User = require('../models/user');




const searchController = async (req, res) => {
    const authHeader = req.headers.authorization;
    const users = await User.find();
    

    if(!authHeader)
    return res.status(401).json({ error: 'Não autorizado' });

    const parts = authHeader.split(' ');
    if (!parts.length === 2)
        return res.status(401).json({ error: 'Token error' });

    const [ scheme, token ]= parts;
    // verifica se o token possui o bearer por padrão do jwt

    if(!/^Bearer$/i.test(scheme))
        return res.status(401).json ({ error: 'Token malformatted' });
    
    jwt.verify(token, process.env.SECRET, (err) => {
        if (err) return res.status(401).json({error: 'Token invalido'});

        return res.json({ users })

    });
};
   
    
module.exports = searchController;