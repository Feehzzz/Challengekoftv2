const homePage = (req, res) => {
    res.send({ Msg: `Welcome, to the fucking API Developed and suffered by Feehzzz.
    To register, send json { name, email, phone, password} in the above url, append "/register", 
    followed by /authenticate, and then /list_users`})
};

module.exports = homePage;