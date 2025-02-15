const express = require('express');
const router = express.Router();
const { authController } = require('../controller');
const authverifytoken = require('../middleware/authveriftoken');

router.get('/search', authController.search);
router.get('/', authController.home);

router.post('/email', authController.email);
router.post('/email/verify', authController.everify);
router.post('/signup', authverifytoken, authController.signup);

router.post('/login', authController.login);

router.post('/forgotpwd', authController.forgotpwd);
router.post('/forgotpwd/verify', authController.fverify);
router.post('/resetpassword', authverifytoken, authController.resetpass);
router.post('/resendotp', authController.resendotp);

module.exports = router;