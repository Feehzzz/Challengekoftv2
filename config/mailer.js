const path = require('path');
const nodemailer = require('nodemailer');
const hbs = require('nodemailer-express-handlebars');

// conexão com o servidor para envio de e-mail
const transport = nodemailer.createTransport({
  host: process.env.HOST,
  port: process.env.MAILPORT,
  auth: { user: process.env.USER, pass: process.env.PASS }
  
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