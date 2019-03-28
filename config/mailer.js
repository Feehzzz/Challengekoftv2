const path = require('path');
const nodemailer = require('nodemailer');
require('dotenv').config();


const hbs = require('nodemailer-express-handlebars');

const transport = nodemailer.createTransport({
  host: process.env.HOST,
  port: process.env.MAILPORT,
  auth: {user: process.env.USER, pass: process.env.PASS }
  
  });


  transport.use('compile', hbs({
    viewEngine:  {
        extname: '.html',
        partialsDir : './forgot_password'
    },
    viewPath: path.resolve('./forgot_password'),
    extName: '.html'
  }));
  
  module.exports = transport;