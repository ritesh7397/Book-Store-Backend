const express = require('express'); 

const signup = require('../controllers/signup.controller')
const login = require('../controllers/login.controller')

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);


module.exports = router;

