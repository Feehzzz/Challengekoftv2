const User = require('../models/user.js');




const resetController = async (req, res) => {
    const { email, token, password } = req.body;

    try {
        const user = await User.findOne ({ email })
            .select('+passwordResetToken passwordResetExpires');

        if (!user)
            return res.status(400).json({ error: 'Usuário não encontrado!' });

        if(token !== user.passwordResetToken)
            return res.status(400).json({ error: 'Token invalido' });

        const now = new Date();

        if (now > user.passwordResetExpires)
            return res.status(400).json({ error: 'Token expirado, gere um novo' });
        
        user.password = password;

        await user.save();
        return res.json();

    } catch (err){
        res.status(400).json({ error: 'Não foi possivel resetar a senha, tente novamente' });
    };
};

module.exports = resetController;