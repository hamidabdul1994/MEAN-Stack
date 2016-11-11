var express = require('express'),
    router = express.Router();
router.use('/signup',require('./signup.js'));

module.exports = router;
