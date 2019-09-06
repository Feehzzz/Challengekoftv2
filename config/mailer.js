const path = require('path');
const nodemailer = require('nodemailer');
const hbs = require('nodemailer-express-handlebars');

// conexão com o servidor para envio de e-mail
const transport = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  auth: { user: process.env.MAIL_USER, pass: process.env.MAIL_PASS }
  
  });

  // utilização de template para envio do e-mail de recuperação de senhas
  transport.use('compile', hbs({
    viewEngine:  {
        extname: '.html',
        partialsDir : './forgot_password'
    },
    viewPath: path.resolve('./forgot_password'),
    extName: '.html'
}));
  
module.exports = transport;