  
const jsonMessagesPath = __dirname + "/../assets/jsonMessages/";
const jsonMessages = require(jsonMessagesPath + "login");

const router = require('express').Router();

router.get('*', function(req, res) {
    res.redirect('/denied');
    res.end();
});

module.exports = router;