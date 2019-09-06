const crypto = require('crypto');

const mailer = require('../config/mailer');

const User = require('../models/user.js');



const recoveryController = async (req, res) =>{
    const { email } = req.body;

    try {
        const user = await User.findOne ({ email });

        if (!user)
        return res.status(400).json({ error: 'Usuário não encontrado!' });

        const token = crypto.randomBytes(20).toString('hex');

        const now = new Date();
        now.setHours(now.getHours() + 1);

        await User.findByIdAndUpdate(user.id, {
            '$set': {
                passwordResetToken: token,
                passwordResetExpires: now,
            }
        });

        
        mailer.sendMail({ 
            to: email,
            from: 'noreply@gmail.com',
            template: '../config/forgot_password',
            context: { token },
        }, (err) => {
            if(err){
                return res.status(400).json({ error: 'Não foi possível enviar e-mail de recuperação' });
            } else {
                return res.json();

            }
        });
    } catch (err){
        return res.status(400).json({ error: 'Erro na recuperação de senha, tente novamente ' + err.message  });
    }
}

module.exports = recoveryController;
