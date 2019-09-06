const homePage = (req, res) => {
    return res.json({ Msg: `Welcome to the api Developed by Feehzzz.
    for more information, check the file readme file on github`})
};

module.exports = homePage;