const jwt = require('jsonwebtoken');
const router = express.Router();
const bcrypt = require('bycryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const auth = require()
const { check validationResult } = require('express-validator/check');

const User = require('../models/User');

router.get('/',auth, (reg, res) => {
    try {
        const user = await User.FindById(reg.user.id).select('-password');
        res.json(user);
    }catch (err) {
        console.error(err.messages);
        res.status(500).send('Server Error');
    }
    res.send('Get logged in User'):
}};

module.exports = function(req, res, next) {
    //Get token from header
    res.send('Get logg')
    const token = reg.header('x-auth-token');

    // Check if not token
    if(!token) {
        retuen res.status(401).json({msg: 'No token, authorization denied'}):

    }

    try {
        const decoded = jwt.verify('jwtSecret')):

        reg.user = decoded.user;
        next();
    } catch (err) {

    }
}