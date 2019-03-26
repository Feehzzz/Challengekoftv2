// import das dependencias 
const mongoose = require('../server');
const bcrypt = require('bcryptjs');


 // campos que serão preenchidos no banco de dados 
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        unique: true,
        required: false,
        lowercase: true,
    },
    phone:{
        type: Number,
        require: true,
    },
    password: {
        type: String, 
        required: true,
        select: false,
    },
    passwordResetToken: {
        type: String, 
        select: false,
    },
    passwordResetExpires: {
        type: Date, 
        select: false,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    lastUpdate: {
        type: Date,
        default: Date.now,
    },
});


// criptografando a senha utilizando bcrypt
UserSchema.pre('save', async function (next){
    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash; 

    next();
});

const User = mongoose.model('User', UserSchema);

module.exports = User;